import PageTitle from "../components/common/PageTitle.jsx";
import StatCard from "../components/common/StatCard.jsx";
import { useSignals } from "../hooks/useSignals";
import { useHoldings } from "../hooks/useHoldings";
import Loading from "../components/common/Loading.jsx";
import ErrorState from "../components/common/ErrorState.jsx";

export default function Dashboard() {
  const signals = useSignals({ limit: 50 });
  const holdings = useHoldings();

  if (signals.isLoading || holdings.isLoading) return <Loading />;
  if (signals.isError) return <ErrorState error={signals.error} />;
  if (holdings.isError) return <ErrorState error={holdings.error} />;

  const signalItems = signals.data?.items ?? signals.data ?? [];
  const holdingItems = holdings.data?.items ?? holdings.data ?? [];

  const buyCount = signalItems.filter((x) => x.type === "BUY").length;
  const sellCount = signalItems.filter((x) => x.type === "SELL").length;

  return (
    <div className="page">
      <PageTitle
        title="대시보드"
        desc="종가 기반 매수(+10%) / 트레일링 스탑(최고가*0.9) 신호를 요약합니다."
      />

      <div className="grid-3">
        <StatCard label="최근 신호" value={signalItems.length} hint="최근 50건 기준" />
        <StatCard label="BUY" value={buyCount} hint="기준일 종가 대비 +10%" />
        <StatCard label="SELL" value={sellCount} hint="최고가*0.9 하향 돌파" />
      </div>

      <div className="grid-2">
        <StatCard label="트래킹 종목" value={holdingItems.length} hint="보유/감시 대상" />
        <StatCard label="알림" value={"준비중"} hint="Slack/Email 연동 예정" />
      </div>
    </div>
  );
}