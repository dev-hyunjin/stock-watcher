import { httpClient } from "./httpClient";

export const stockApi = {
  getSignals: async (params = {}) => {
    const res = await httpClient.get("/api/signals", { params });
    return res.data; // { items: [...] }
  },

  getHoldings: async () => {
    const res = await httpClient.get("/api/holdings");
    return res.data; // { items: [...] }
  },

  getSettings: async () => {
    const res = await httpClient.get("/api/settings");
    return res.data; // SettingDto
  },

  saveSettings: async (payload) => {
    const res = await httpClient.post("/api/settings", payload);
    return res.data;
  }
};