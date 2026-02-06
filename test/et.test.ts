import {assertEquals} from "@std/assert";
import {eorzeatime} from "../src/et.ts";

Deno.test("Calculate at specified time", () => {
    assertEquals(eorzeatime(1750000000), {
        epoch: 36000000000,
        year: 1086,
        month: 1,
        date: 27,
        hours: 16,
        minutes: 0,
        seconds: 0,
        monthState: "Astral",
        monthWithState: 1
    });
});

Deno.test("Calculate at current time", () => {
    eorzeatime();
});