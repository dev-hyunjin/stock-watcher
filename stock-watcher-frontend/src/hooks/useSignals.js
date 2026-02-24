import { useQuery } from "@tanstack/react-query";
import { stockApi } from "../services/stockApi";

export function useSignals(filters) {
  return useQuery({
    queryKey: ["signals", filters],
    queryFn: () => stockApi.getSignals(filters)
  });
}