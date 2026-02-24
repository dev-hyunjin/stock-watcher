import PageTitle from "../components/common/PageTitle.jsx";

export default function Settings() {
  return (
    <div className="page">
      <PageTitle title="설정" desc="알림 채널, 기준 퍼센트(+10%), 트레일링(0.9) 등을 설정합니다." />
      <div className="card">
        <div className="card-label">예정</div>
        <div className="card-hint">
          백엔드 설정 API(/api/settings) 확정되면 폼 + 저장 기능까지 붙이겠습니다.
        </div>
      </div>
    </div>
  );
}