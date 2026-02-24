import PageTitle from "../components/common/PageTitle.jsx";
import Loading from "../components/common/Loading.jsx";
import ErrorState from "../components/common/ErrorState.jsx";
import HoldingsGrid from "../components/grids/HoldingsGrid.jsx";
import { useHoldings } from "../hooks/useHoldings";

export default function Holdings() {
  const q = useHoldings();

  if (q.isLoading) return <Loading />;
  if (q.isError) return <ErrorState error={q.error} />;

  const rows = q.data?.items ?? []; // ✅ {items:[]}
  return (
    <div className="page">
      <PageTitle
        title="보유/트래킹"
        desc="매수 이후 최고가, 트레일링 스탑 기준가 등을 추적합니다."
      />
      <HoldingsGrid rows={rows} />
    </div>
  );
}