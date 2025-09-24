import { useState } from "react";
import ResultBox from "./ResultBox";

export default function Form() {
  const [url, setUrl] = useState("");
  const [type, setType] = useState("link4m");
  const [platform, setPlatform] = useState("google");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse("⏳ Đang xử lý...");

    try {
      // TODO: thay bằng backend URL thật (Render/Supabase API)
      const res = await fetch("https://your-backend-url.onrender.com/jobs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, type, platform }),
      });

      const data = await res.json();
      if (data.job_id) {
        setResponse(`✅ Job đã tạo: ${data.job_id}`);
      } else if (data.message) {
        setResponse(data.message);
      } else {
        setResponse("❌ Lỗi không xác định");
      }
    } catch (err: any) {
      setResponse("❌ Lỗi kết nối: " + err.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Nhập link của bạn..."
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          required
        />

        <select
          className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="link4m">Link4m</option>
          <option value="layma">Layma.net</option>
        </select>

        {type === "layma" && (
          <select
            className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none"
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="google">Google</option>
            <option value="facebook">Facebook</option>
          </select>
        )}

        <button
          type="submit"
          className="w-full p-3 rounded-lg bg-blue-600 hover:bg-blue-700 transition"
        >
          Gửi cho bot
        </button>
      </form>

      <ResultBox response={response} />
    </>
  );
}
