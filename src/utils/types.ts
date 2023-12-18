import { currencies, languages } from "./constants";

export type Language = (typeof languages)[number];
export type Currency = (typeof currencies)[number];

export interface IDelete {
  url: string;
  body?: any;
}

export interface IPost extends IDelete {
  body?: string;
}

export type IPatch = IPost;

export type IPut = IPost;

export interface IGet extends IDelete {
  query?: Record<string, any>;
}
