export default function PageTitle({ title, desc }) {
    return (
      <div className="page-title">
        <h1>{title}</h1>
        {desc ? <p>{desc}</p> : null}
      </div>
    );
}