import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromPaste, resetAllPaste } from "../redux/pasteSlice";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredPastes = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 p-6 text-white">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-3xl font-bold mb-6 text-center">
          📋 Your Pastes
        </h1>

        {/* Search + Reset */}
        <div className="flex gap-3 mb-6">
          <input
            type="text"
            placeholder="🔎 Search paste..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-3 rounded-xl bg-slate-800 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={() => dispatch(resetAllPaste())}
            className="px-4 py-2 bg-red-600 rounded-xl hover:bg-red-700 transition"
          >
            Reset All
          </button>
        </div>

        {/* Paste Cards */}
        <div className="space-y-4">
          {filteredPastes.length > 0 ? (
            filteredPastes.map((paste) => (
              <div
                key={paste._id}
                className="bg-slate-800 border border-slate-700 rounded-2xl p-5 shadow-lg"
              >
                <h2 className="text-xl font-semibold">{paste.title}</h2>

                <p className="text-slate-300 mt-2 line-clamp-2">
                  {paste.content}
                </p>

                <p className="text-xs text-slate-400 mt-2">
                  {new Date(paste.createdAt).toLocaleString()}
                </p>

                <div className="flex gap-3 mt-4">
                  <Link
                    to={`/?pasteId=${paste._id}`}
                    className="px-3 py-1 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400"
                  >
                    Edit
                  </Link>

                  <Link
                    to={`/pastes/${paste._id}`}
                    className="px-3 py-1 bg-blue-500 rounded-lg hover:bg-blue-400"
                  >
                    View
                  </Link>

                  <button
                    onClick={() => dispatch(removeFromPaste(paste._id))}
                    className="px-3 py-1 bg-red-500 rounded-lg hover:bg-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-slate-400">
              No pastes found 😢
            </p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Paste;