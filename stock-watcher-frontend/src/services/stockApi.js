import { httpClient } from "./httpClient";

// 백엔드에서 이런 형태로 제공한다고 가정(필요하면 맞춰서 바꾸면 됨)
export const stockApi = {
  // 매수/매도 신호 목록
  getSignals: async (params = {}) => {
    const res = await httpClient.get("/api/signals", { params });
    return res.data;
  },

  // 보유/트래킹 목록
  getHoldings: async () => {
    const res = await httpClient.get("/api/holdings");
    return res.data;
  },

  // 설정 조회/저장
  getSettings: async () => {
    const res = await httpClient.get("/api/settings");
    return res.data;
  },
  saveSettings: async (payload) => {
    const res = await httpClient.post("/api/settings", payload);
    return res.data;
  }
};