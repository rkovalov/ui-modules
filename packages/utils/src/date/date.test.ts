import { convertTimezone } from './date';

describe('convertTimezone', () => {
  it('should convert timezones correctly', () => {
    const date = new Date('2023-01-01T12:00:00.000Z');

    const fromTimezone = 'America/New_York';
    const toTimezone = 'Europe/Berlin';

    const result = convertTimezone(date, fromTimezone, toTimezone);

    expect(result.toISOString()).toEqual('2023-01-01T18:00:00.000Z');
  });
});
