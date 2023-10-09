/* eslint-disable no-param-reassign */
import axios from "axios";
import QueryString from "query-string";
import { IDelete, IGet, IPatch, IPost, IPut } from "./types";

class HttpFacade {
  private http;

  constructor() {
    this.http = axios.create({
      baseURL: `${process.env.BASE_URL}/wp-json/wp/v2`,
      headers: { "content-type": "application/json" },
    });

    this.http.interceptors.request.use(
      (config) => {
        //update store to use auth storage
        // if (token) config.headers!.Authorization = ``;
        // const token = `${process.env.WOO_CLIENT_KEY}:${process.env.WOO_CLIENT_SECRET}`;
        // const encodedToken = Buffer.from(token).toString("base64");
        // config.headers.Authorization = "Basic " + encodedToken;
        return config;
      },
      (error) => Promise.reject(error)
    );
  }

  post = async ({ url, body }: IPost) => {
    const response = await this.http.post(url, body);
    return response.data;
  };

  patch = async ({ url, body }: IPatch) => {
    const response = await this.http.patch(url, body);
    return response.data;
  };

  get = async ({ url, query = {} }: IGet) => {
    const queryString = `?${QueryString.stringify(query)}`;
    const response = await this.http.get(`${url + queryString}`);
    return response.data;
  };

  delete = async ({ url }: IDelete) => {
    const response = await this.http.delete(url);
    return response.data;
  };

  put = async ({ url, body }: IPut) => {
    const response = await this.http.put(url, body);
    return response.data;
  };
}

export default new HttpFacade();
