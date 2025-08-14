import {} from "jsr:@std/assert@1.0.14";

import {eorzeatime} from "../src/eorzeatime.ts";

Deno.test({
    name: "",
    fn() {
        eorzeatime(Math.floor(Date.now() / 1000));
    }
});