import { useQuery } from "@tanstack/react-query";
import { stockApi } from "../services/stockApi";

export function useHoldings() {
  return useQuery({
    queryKey: ["holdings"],
    queryFn: () => stockApi.getHoldings()
  });
}