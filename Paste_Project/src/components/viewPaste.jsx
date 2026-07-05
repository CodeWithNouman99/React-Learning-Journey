import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";

const ViewPaste = () => {
  const { id } = useParams();
  const pastes = useSelector((state) => state.paste.pastes);

  const paste = pastes.find((p) => p._id === id);

  if (!paste) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">
        ❌ Paste Not Found
      </div>
    );
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(paste.content);
    toast.success("📋 Copied to Clipboard!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-6 flex justify-center">
      
      <div className="w-full max-w-3xl bg-slate-950/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-slate-700">

        <h1 className="text-3xl font-bold text-white mb-4">
          👁️ View Paste
        </h1>

        <h2 className="text-xl text-blue-400 mb-4">
          {paste.title}
        </h2>

        <textarea
          value={paste.content}
          readOnly
          rows={15}
          className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-700 text-white resize-none"
        />

        <div className="flex gap-3 mt-5">
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-green-600 rounded-xl hover:bg-green-500 transition"
          >
            📋 Copy
          </button>

          <Link
            to="/pastes"
            className="px-4 py-2 bg-blue-600 rounded-xl hover:bg-blue-500 transition"
          >
            🔙 Back
          </Link>
        </div>

      </div>
    </div>
  );
};

export default ViewPaste;