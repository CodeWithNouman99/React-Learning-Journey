import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToPaste, updateToPaste } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");

  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");

  const dispatch = useDispatch();

  const createPaste = () => {
    const paste = {
      title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    pasteId
      ? dispatch(updateToPaste(paste))
      : dispatch(addToPaste(paste));

    setTitle("");
    setValue("");
    setSearchParams({});
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 p-6">
      
      <div className="w-full max-w-3xl bg-slate-950/70 backdrop-blur-lg shadow-2xl rounded-3xl p-8 border border-slate-700">

        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          ✨ Paste Creator
        </h1>

        <div className="flex gap-3 mb-5">
          <input
            type="text"
            placeholder="Enter title here..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="flex-1 p-3 rounded-xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          <button
            onClick={createPaste}
            className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-105 hover:shadow-lg transition-all duration-300"
          >
            {pasteId ? "Update Paste" : "Create Paste"}
          </button>
        </div>

        <textarea
          value={value}
          placeholder="Write your paste content here..."
          onChange={(e) => setValue(e.target.value)}
          rows={15}
          className="w-full p-4 rounded-2xl bg-slate-900 border border-slate-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition resize-none"
        />

      </div>
    </div>
  );
};

export default Home;