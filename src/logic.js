import { words } from "./words.js";

const { Temporal } = temporal;

function getDays() {
  const epoch = Temporal.PlainDate.from({ year: 2020, month: 1, day: 1 });
  const today = Temporal.Now.instant().toZonedDateTimeISO("UTC").toPlainDate();

  return today.since(epoch).days;
}

function mulberry32(a) {
  return function () {
    var t = (a += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function chooseRandomWord() {
  const MAX_INT32 = 2147483647;
  const random = mulberry32(getDays())();

  return words[Math.floor((random * MAX_INT32) % words.length)];
}

