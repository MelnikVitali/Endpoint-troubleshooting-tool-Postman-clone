//@ts-nocheck
import { create } from 'zustand';
import axios, { InternalAxiosRequestConfig, AxiosResponse } from 'axios';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import toast from 'react-hot-toast';
import prettyBytes from 'pretty-bytes';
import { keyValuePairsToObjects } from '../utils/keyValuePairsToObjects';

declare module 'axios' {
  export interface AxiosRequestConfig {
    customData?: {
      startTime?: number;
    };
  }

  export interface AxiosResponse {
    customData?: {
      time?: number;
      startTime?: number;
    };
    updateEndTime?: number;
  }
}

export interface PostmanState {
  url: string;
  status: string;
  time: string;
  size: string;
  cookie: string;
  response: object;
  responseHeaders: object;
  reqBody: string;
  isLoading: boolean;
  error: string;
}

export interface PostmanActions {
  setUrl: (url: string) => void;
  setReqBody: (data: any) => void;
  fetchRequest: (data: any) => void;
  resetState: () => void;
}

const initialState: PostmanState = {
  url: '',
  status: '',
  time: '',
  size: '',
  cookie: '',
  response: {},
  responseHeaders: {},
  reqBody: '{\n  \n}',
  isLoading: false,
  error: '',
};

export const usePostmanStore = create<PostmanState & PostmanActions>()(
  devtools(
    immer((set, get) => ({
      ...initialState,
      setUrl: (url) => set({ url: url }),
      setReqBody: (data) => set({ reqBody: data }),
      resetState: () => set({ ...initialState, url: get().url }),
      fetchRequest: async (data) => {
        axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
          request.customData = request.customData || {};
          request.customData.startTime = new Date().getTime();
          return request;
        });

        const updateEndTime = (response: AxiosResponse): any => {
          if (response !== undefined) {
            response.customData = response.customData || {};
            if (response.config.customData?.startTime) {
              response.customData.time =
                new Date().getTime() - response.config.customData?.startTime;
            }

            return response;
          }
        };

        axios.interceptors.response.use(updateEndTime, (e) => {
          return Promise.reject(updateEndTime(e.response));
        });

        try {
          set(() => ({ isLoading: true }));

          const requestBody = get().reqBody.toString();

          let body;

          if (data?.method === 'POST') {
            try {
              body = JSON.parse(requestBody);
            } catch (e) {
              toast.error('Something is wrong with the Body JSON data.');
              set(() => ({ isLoading: false }));
              return;
            }
          }

          const options = {
            url: data.url,
            method: data.method,
            params: keyValuePairsToObjects(data.query_data),
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
              // 'Access-Control-Allow-Origin': '*',
              // 'Content-Type': 'application/json',
              // 'Access-Control-Allow-Methods':
              // 'GET, PUT, POST, DELETE, OPTIONS',
              ...keyValuePairsToObjects(data.header_data),
            },
            data: body || {},
            validateStatus: () => true,
          };

          const response = await axios(options);

          if (response !== undefined) {
            set(() => ({
              isLoading: false,
              status: response.status,
              time: response?.customData?.time,
              cookie: document.cookie ? document.cookie : '',
              size: prettyBytes(
                JSON.stringify(response.data).length + JSON.stringify(response.headers).length,
              ),
              response: response.data,
              responseHeaders: response.headers,
            }));

            if (response.status.toString()[0] === '2') {
              toast.success(`Successfully returned response status: ${response.status}`);
            } else {
              toast.error(`Response status: ${response.status}`);
            }
          }
        } catch (error) {
          toast.error(`Response error: ${String(error)}`);

          console.log('Error response: ', error);

          set(() => ({
            error: (error as Error)?.message,
            isLoading: false,
            status: '',
            time: '',
            cookie: '',
            size: '',
            response: String(error),
            responseHeaders: '',
          }));
        }
      },
    })),
  ),
);
