const SEC_MINUTES = 60;
const SEC_HOURS = SEC_MINUTES * 60;
const SEC_DATE = SEC_HOURS * 24;
const SEC_MONTH = SEC_DATE * 32;
const SEC_YEAR = SEC_MONTH * 12;

export interface EorzeaTime {
    /**
     * This has same meaning as UNIX epoch time in real-world.
     * The number of seconds elapsed since start of Eorzea time.
     * The start point of Eorzea time is same as start point of UNIX epoch time (`1970-01-01T00:00:00Z`).
     * Since time moves faster in Eorzea than in real-world, this is UNIX epoch time multiplied by speed ratio.
     */
    epoch: number;

    /**
     * The starting point of Eorzea time was probably set for system reasons, so although year can be calculated, it is not very meaningful.
     */
    year: number;

    /**
     * The number of month.
     */
    month: number;

    /**
     * The number of date.
     */
    date: number;

    /**
     * The number of hours.
     */
    hours: number;

    /**
     * The number of minutes.
     */
    minutes: number;

    /**
     * The concept of seconds exists and is necessary for calculating Eorzea time, but there is no way to check it in-game and it counts so quickly, it is not very useful.
     */
    seconds: number;

    /**
     * The state of moon.
     */
    monthState: "Astral" | "Umbral";

    /**
     * The number of month taking into account state of moon (Astral or Umbral).
     */
    monthWithState: number;
}

/**
 * Calculate to Eorzea time from real-world time with UNIX epoch time.
 * If argument is not present, current time is assigned.
 * @example
 * ```ts
 * const et = eorzeatime();
 * ```
 */
export function eorzeatime(t?: number): EorzeaTime {
    const epoch = Math.floor((t ?? Math.floor(Date.now() / 1000)) * 144 / 7);

    const r1 = epoch % SEC_YEAR;
    const r2 = r1 % SEC_MONTH;
    const r3 = r2 % SEC_DATE;
    const r4 = r3 % SEC_HOURS;

    const year = Math.floor(epoch / SEC_YEAR) + 1;
    const month = Math.floor(r1 / SEC_MONTH) + 1;
    const date = Math.floor(r2 / SEC_DATE) + 1;
    const hours = Math.floor(r3 / SEC_HOURS);
    const minutes = Math.floor(r4 / SEC_MINUTES);
    const seconds = r4 % SEC_MINUTES;

    const evenMonth = month % 2 === 0;

    const monthState = evenMonth ? "Umbral" : "Astral";
    const monthWithState = (evenMonth ? month : month + 1) / 2;

    return {epoch, year, month, date, hours, minutes, seconds, monthState, monthWithState};
}