import PageTitle from "../components/common/PageTitle.jsx";
import Loading from "../components/common/Loading.jsx";
import ErrorState from "../components/common/ErrorState.jsx";
import SignalsGrid from "../components/grids/SignalsGrid.jsx";
import { useSignals } from "../hooks/useSignals";

export default function Signals() {
  const q = useSignals({ limit: 200 });

  if (q.isLoading) return <Loading />;
  if (q.isError) return <ErrorState error={q.error} />;

  const rows = q.data?.items ?? []; // ✅ {items:[]}
  return (
    <div className="page">
      <PageTitle
        title="매수/매도 신호"
        desc="신호 히스토리 및 근거(종가/최고가/트레일링)를 확인합니다."
      />
      <SignalsGrid rows={rows} />
    </div>
  );
}