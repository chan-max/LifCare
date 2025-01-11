import { Solar, Lunar } from "lunar-javascript";

export const today = Solar.fromDate(new Date());


export const lunarToday = Lunar.fromDate(new Date());