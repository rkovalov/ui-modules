import { fromZonedTime, toZonedTime } from 'date-fns-tz';

export function convertTimezone(date: Date, fromTimezone: string, toTimezone: string): Date {
  const utcDate = fromZonedTime(date, fromTimezone);
  return toZonedTime(utcDate, toTimezone);
}
