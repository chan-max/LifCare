import { useLocalStorage } from "./hooks/storage"




// 用户的自定义记录禁用列表
export const userCustomRecordTypeDisableList = useLocalStorage('lif_user_custom_record_type', [
])