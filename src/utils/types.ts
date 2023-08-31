import { currencies, languages } from "./constants";

export type Language = (typeof languages)[number];
export type Currency = (typeof currencies)[number];
