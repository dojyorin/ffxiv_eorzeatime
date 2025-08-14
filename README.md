# FFXIV ET library
![actions:test](https://github.com/dojyorin/ffxiv_eorzeatime/actions/workflows/test.yaml/badge.svg)
![actions:release](https://github.com/dojyorin/ffxiv_eorzeatime/actions/workflows/release.yaml/badge.svg)
![shields:license](https://img.shields.io/github/license/dojyorin/ffxiv_eorzeatime)
![shields:release](https://img.shields.io/github/release/dojyorin/ffxiv_eorzeatime)

Calculate Eorzea time.

## Details
Calculate to Eorzea time from real-world time.

## Eorzea Time Specifications
There are three differences between time in real-world and Eorzea.

1. Leap years do not exist.
2. The number of days in each month is fixed at `32`.
3. Time progresses at a rate of `3600 / 175` = `144 / 7` ... `20.57` times faster.
    - `175` seconds in real-world is `3600` seconds in Eorzea.

All other conditions are same as in real-world.

### Starting Point
This is likely due to game development reasons, but starting point of Eorzea time (`0001-01-01T00:00:00`) is equivalent to starting point of UNIX epoch time (`1970-01-01T00:00:00Z`).
So although year can be calculated, it does not mean much because we do not know how it relates to story.

### Eorzea Epoch Time
Given these specifications, the number of seconds elapsed since starting point of Eorzea time can be calculated as "Eorzea epoch time", which can be treated same as UNIX epoch time.

```math
T_e = \lfloor T_u \times 144 \div 7 \rfloor
```

## Example
```ts
import {eorzeatime} from "https://esm.sh/gh/dojyorin/ffxiv_eorzeatime@v1.0.0/mod.ts?bundle&target=esnext";

const et = eorzeatime();
```

## API
- `function eorzeatime(t?: number): EorzeaTime`
- `interface EorzeaTime`