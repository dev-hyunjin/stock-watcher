export default function ErrorState({ error }) {
    const msg =
      typeof error === "string"
        ? error
        : error?.response?.data?.message || error?.message || "오류가 발생했습니다.";
    return <div className="state error">❗ {msg}</div>;
}