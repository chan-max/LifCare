import { defineStore } from 'pinia'
import { ref } from 'vue'
import Api from '@/common/api/api'

export const useAnalyzeStore = defineStore('analyze', () => {
  const dayrecord = ref()
  const analyze = ref()

  async function initAnalyze () {
    const data = await Api.getUserAnalyze()
    analyze.value = data
  }

  async function initDayrecord () {
    const data = await Api.getDayrecord()
    dayrecord.value = data
  }

  return {
    dayrecord,
    analyze,
    initDayrecord,
    initAnalyze
  }
})
