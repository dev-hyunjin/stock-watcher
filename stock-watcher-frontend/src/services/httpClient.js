import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE || "";

export const httpClient = axios.create({
  baseURL,
  timeout: 15000
});

// 공통 에러 로깅/토큰처리 등 필요 시 여기서 확장
httpClient.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);