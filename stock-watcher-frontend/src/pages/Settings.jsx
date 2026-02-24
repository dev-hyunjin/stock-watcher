import { useEffect, useState } from "react";
import PageTitle from "../components/common/PageTitle.jsx";
import Loading from "../components/common/Loading.jsx";
import ErrorState from "../components/common/ErrorState.jsx";
import { stockApi } from "../services/stockApi";

export default function Settings() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);
  const [okMsg, setOkMsg] = useState("");

  const [form, setForm] = useState({
    inAppEnabled: true,
    emailEnabled: false,
    emailAddress: "",
    telegramEnabled: false,
    telegramChatId: "",
    slackEnabled: false,
    slackWebhookUrl: ""
  });

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await stockApi.getSettings();
        setForm({
          inAppEnabled: !!data.inAppEnabled,
          emailEnabled: !!data.emailEnabled,
          emailAddress: data.emailAddress || "",
          telegramEnabled: !!data.telegramEnabled,
          telegramChatId: data.telegramChatId || "",
          slackEnabled: !!data.slackEnabled,
          slackWebhookUrl: data.slackWebhookUrl || ""
        });
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const onChange = (k) => (e) => {
    const v = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setForm((prev) => ({ ...prev, [k]: v }));
  };

  const onSave = async () => {
    try {
      setSaving(true);
      setOkMsg("");
      setError(null);
      await stockApi.saveSettings(form);
      setOkMsg("저장되었습니다.");
    } catch (e) {
      setError(e);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorState error={error} />;

  return (
    <div className="page">
      <PageTitle title="설정" desc="알림 채널을 설정합니다. (전략 값은 현재 기본값으로 제공)" />

      {okMsg ? <div className="state">{okMsg}</div> : null}

      <div className="card" style={{ display: "grid", gap: 10 }}>
        <label>
          <input type="checkbox" checked={form.inAppEnabled} onChange={onChange("inAppEnabled")} />
          &nbsp; 인앱 알림 활성
        </label>

        <label>
          <input type="checkbox" checked={form.emailEnabled} onChange={onChange("emailEnabled")} />
          &nbsp; 이메일 알림 활성
        </label>
        <input
          placeholder="email@example.com"
          value={form.emailAddress}
          onChange={onChange("emailAddress")}
          disabled={!form.emailEnabled}
        />

        <label>
          <input type="checkbox" checked={form.telegramEnabled} onChange={onChange("telegramEnabled")} />
          &nbsp; 텔레그램 알림 활성
        </label>
        <input
          placeholder="telegram chat id"
          value={form.telegramChatId}
          onChange={onChange("telegramChatId")}
          disabled={!form.telegramEnabled}
        />

        <label>
          <input type="checkbox" checked={form.slackEnabled} onChange={onChange("slackEnabled")} />
          &nbsp; 슬랙 알림 활성
        </label>
        <input
          placeholder="https://hooks.slack.com/services/..."
          value={form.slackWebhookUrl}
          onChange={onChange("slackWebhookUrl")}
          disabled={!form.slackEnabled}
        />

        <button onClick={onSave} disabled={saving}>
          {saving ? "저장 중..." : "저장"}
        </button>
      </div>
    </div>
  );
}