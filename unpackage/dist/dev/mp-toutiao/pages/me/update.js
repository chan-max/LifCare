"use strict";
const common_vendor = require("../../common/vendor.js");
const common_api_api = require("../../common/api/api.js");
const common_api_cos = require("../../common/api/cos.js");
const store_login = require("../../store/login.js");
const common_date = require("../../common/date.js");
if (!Array) {
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  _easycom_uni_datetime_picker2();
}
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
if (!Math) {
  _easycom_uni_datetime_picker();
}
const defaultAvatar = "/static/default-avatar.png";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "update",
  setup(__props) {
    let loginStore = store_login.useLoginStatusStore();
    const form = common_vendor.reactive({
      username: "",
      // 用户名
      phone: null,
      gender: null,
      // 性别值：0 表示女，1 表示男
      birthday: null,
      avatar: "",
      // 当前头像的 COS URL
      avatarFile: null,
      // 新头像文件
      oldAvatar: "",
      // 旧头像地址
      email: "",
      name: ""
    });
    const avatarPreview = common_vendor.ref("");
    const genderOptions = [
      { label: "女", value: 0 },
      { label: "男", value: 1 }
    ];
    const genderLabels = {
      [1]: "男",
      [0]: "女"
    };
    const fetchUserInfo = async () => {
      try {
        const response = await common_api_api.Api.getUserInfo();
        Object.assign(form, {
          ...response.data,
          gender: response.data.gender,
          // gender 值直接从 API 获取
          birthday: common_date.formatDate(response.data.birthday),
          oldAvatar: response.data.avatar || ""
        });
      } catch (error) {
        console.error("获取用户信息失败：", error);
        common_vendor.index.showToast({ title: "获取用户信息失败", icon: "none" });
      }
    };
    const onGenderChange = (e) => {
      form.gender = genderOptions[e.detail.value].value;
    };
    const deleteOldAvatar = async () => {
      if (form.oldAvatar) {
        try {
          const key = form.oldAvatar.split("/").pop();
          await common_api_cos.deleteCOSFile(key);
          console.log("旧头像已删除:", key);
        } catch (error) {
          console.error("删除旧头像失败：", error);
        }
      }
    };
    const chooseAvatar = () => {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["compressed"],
        sourceType: ["album", "camera"],
        success: (res) => {
          const filePath = res.tempFilePaths[0];
          avatarPreview.value = filePath;
          form.avatarFile = res.tempFiles[0];
        },
        fail: () => {
          common_vendor.index.showToast({ title: "头像选择失败", icon: "none" });
        }
      });
    };
    const submitForm = async () => {
      try {
        common_vendor.index.showLoading({ title: "保存中..." });
        if (form.avatarFile) {
          await deleteOldAvatar();
          const { url } = await common_api_cos.uploadToCOS({ file: form.avatarFile });
          form.avatar = url;
        }
        const submitData = { ...form };
        delete submitData.avatarFile;
        delete submitData.oldAvatar;
        await common_api_api.Api.updateUserInfo(submitData);
        common_vendor.index.showToast({ title: "保存成功", icon: "success" });
        loginStore.getUserInfo();
        form.oldAvatar = form.avatar;
      } catch (error) {
        console.error("保存失败：", error);
        common_vendor.index.showToast({ title: "保存失败，请重试", icon: "none" });
      } finally {
        common_vendor.index.hideLoading();
      }
    };
    common_vendor.onMounted(() => {
      fetchUserInfo();
    });
    return (_ctx, _cache) => {
      return {
        a: avatarPreview.value || form.avatar || defaultAvatar,
        b: common_vendor.o(chooseAvatar),
        c: form.username,
        d: common_vendor.o(($event) => form.username = $event.detail.value),
        e: form.name,
        f: common_vendor.o(($event) => form.name = $event.detail.value),
        g: common_vendor.t(genderLabels[form.gender] || "请选择性别"),
        h: genderLabels,
        i: common_vendor.o(onGenderChange),
        j: common_vendor.o(($event) => form.birthday = $event),
        k: common_vendor.p({
          type: "datetime",
          modelValue: form.birthday
        }),
        l: form.email,
        m: common_vendor.o(($event) => form.email = $event.detail.value),
        n: common_vendor.o(submitForm)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-fa91e1ce"]]);
tt.createPage(MiniProgramPage);
