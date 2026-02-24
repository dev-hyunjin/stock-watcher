export default function StatCard({ label, value, hint }) {
    return (
      <div className="card">
        <div className="card-label">{label}</div>
        <div className="card-value">{value}</div>
        {hint ? <div className="card-hint">{hint}</div> : null}
      </div>
    );
}