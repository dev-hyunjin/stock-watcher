import { NavLink } from "react-router-dom";

const items = [
  { to: "/", label: "대시보드" },
  { to: "/signals", label: "매수/매도 신호" },
  { to: "/holdings", label: "보유/트래킹" },
  { to: "/settings", label: "설정" }
];

export default function SideNav() {
  return (
    <aside className="sidenav">
      <div className="brand">
        <div className="brand-title">StockWatcher</div>
        <div className="brand-sub">알림 중심 시그널 트래커</div>
      </div>

      <nav className="nav">
        {items.map((it) => (
          <NavLink
            key={it.to}
            to={it.to}
            className={({ isActive }) => "nav-item" + (isActive ? " active" : "")}
            end={it.to === "/"}
          >
            {it.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}