"use strict";
const RecordTypeOptions = [
  {
    type: "sleep",
    label: "睡眠",
    logo: "/static/img/record/sleep.png"
  },
  {
    type: "diet",
    label: "饮食",
    logo: "/static/img/record/diet.png"
  },
  {
    type: "water",
    label: "饮水",
    logo: "/static/img/record/water.png"
  },
  {
    type: "walk",
    logo: "/static/img/record/walk.png",
    label: "步数"
  },
  {
    type: "height",
    logo: "/static/img/record/height.png",
    label: "身高"
  },
  {
    type: "weight",
    label: "体重",
    logo: "/static/img/record/weight.png"
  },
  {
    type: "pulse",
    label: "心率",
    logo: "/static/img/record/pulse.png"
  },
  {
    type: "mood",
    label: "心情",
    logo: "/static/img/record/mood.png"
  },
  {
    type: "feeling",
    label: "感觉",
    logo: "/static/img/record/feeling.png"
  },
  {
    type: "period",
    label: "生理期",
    logo: "/static/img/record/period.png"
  },
  {
    type: "smoke",
    label: "吸烟",
    logo: "/static/img/record/smoke.png"
  },
  {
    type: "drink",
    label: "喝酒",
    logo: "/static/img/record/drink.png"
  },
  {
    type: "disease",
    label: "生病",
    logo: "/static/img/record/disease.png"
  },
  {
    type: "event",
    label: "事件",
    logo: "/static/img/record/event.png"
  },
  {
    type: "mark",
    label: "标记",
    logo: "/static/img/record/mark.png"
  },
  {
    type: "sport",
    label: "运动",
    logo: "/static/img/record/sport.png"
  },
  {
    type: "luck",
    label: "运气",
    logo: "/static/img/record/luck.png"
  }
];
const moodOptions = [
  { type: "happy", label: "高兴" },
  { type: "excited", label: "兴奋" },
  { type: "content", label: "满足" },
  { type: "calm", label: "平静" },
  { type: "relaxed", label: "放松" },
  { type: "grateful", label: "感激" },
  { type: "optimistic", label: "乐观" },
  { type: "proud", label: "自豪" },
  { type: "joyful", label: "喜悦" },
  { type: "neutral", label: "中立" },
  { type: "bored", label: "无聊" },
  { type: "tired", label: "疲惫" },
  { type: "confused", label: "困惑" },
  { type: "curious", label: "好奇" },
  { type: "thoughtful", label: "深思" },
  { type: "sad", label: "悲伤" },
  { type: "lonely", label: "孤独" },
  { type: "anxious", label: "焦虑" },
  { type: "fearful", label: "害怕" },
  { type: "guilty", label: "内疚" },
  { type: "ashamed", label: "羞愧" },
  { type: "frustrated", label: "沮丧" },
  { type: "angry", label: "愤怒" },
  { type: "jealous", label: "嫉妒" },
  { type: "resentful", label: "愤恨" },
  { type: "stressed", label: "压力大" },
  { type: "nostalgic", label: "怀旧" },
  { type: "embarrassed", label: "尴尬" },
  { type: "satisfied", label: "满意" },
  { type: "melancholic", label: "忧郁" },
  { type: "motivated", label: "有动力" },
  { type: "insecure", label: "不安" },
  { type: "overwhelmed", label: "不堪重负" },
  { type: "inspired", label: "被激励" },
  { type: "empowered", label: "充满力量" },
  { type: "hopeful-yet-anxious", label: "既充满希望又焦虑" },
  { type: "peaceful", label: "安宁" },
  { type: "determined", label: "坚定" },
  { type: "bittersweet", label: "苦乐参半" },
  { type: "relieved", label: "如释重负" },
  { type: "exhausted", label: "精疲力尽" },
  { type: "curious-yet-nervous", label: "既好奇又紧张" },
  { type: "hopeful", label: "充满希望" }
];
exports.RecordTypeOptions = RecordTypeOptions;
exports.moodOptions = moodOptions;
