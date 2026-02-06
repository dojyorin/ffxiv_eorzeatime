import {assertEquals} from "jsr:@std/assert@1.0.14";

import {eorzeatime} from "../src/eorzeatime.ts";

Deno.test({
    name: "Calculate at specified time",
    fn() {
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
    }
});

Deno.test({
    name: "Calculate at current time",
    fn() {
        eorzeatime();
    }
});