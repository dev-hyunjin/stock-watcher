export default function Header() {
    return (
      <header className="header">
        <div className="header-left">
          <div className="header-title">StockWatcher</div>
          <div className="header-desc">종가 기반 신호/트레일링 스탑 모니터링</div>
        </div>
        <div className="header-right">
          <span className="pill">No Trading · Alerts Only</span>
        </div>
      </header>
    );
}