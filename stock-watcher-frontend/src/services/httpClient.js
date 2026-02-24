import axios from "axios";

// 개발 프록시 사용하면 baseURL 필요 없음(= 같은 origin)
// 운영에서 API 도메인이 다르면 VITE_API_BASE를 사용
const baseURL = import.meta.env.VITE_API_BASE || "";

function getUserId() {
  // 임시: 로그인 붙이기 전까지 로컬스토리지에서 userId 사용
  // 없으면 백엔드도 1로 처리하도록 되어있지만, 일단 명시적으로 넣어둠
  return localStorage.getItem("sw_userId") || "1";
}

export const httpClient = axios.create({
  baseURL,
  timeout: 15000
});

// 요청마다 헤더 자동 삽입
httpClient.interceptors.request.use((config) => {
  config.headers = config.headers || {};
  config.headers["X-USER-ID"] = getUserId();
  return config;
});