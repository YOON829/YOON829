import { DateTime } from "luxon";

export const makeRandomPasteDate = () => {
  const value = new Date().valueOf();
  const n = 100000;
  return new Date(value - Math.floor(Math.random() * n * n));
};

export const makerelativeDate = (date: Date) =>
  DateTime.fromJSDate(date).startOf("day").toRelative();
export const randomRelativeDate = () => makerelativeDate(makeRandomPasteDate());
export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATETIME_FULL);

export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPasteDate());
