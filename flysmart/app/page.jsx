"use client";
import React, { useState, useEffect } from "react";
import { Plane, Sparkles, Shield, Globe2, User, Search } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const [origin, setOrigin] = useState("JNB");
  const [destination, setDestination] = useState("LHR");
  const [depart, setDepart] = useState("");
  const [aiMsgs, setAiMsgs] = useState(["Hi! I’m your AI co-pilot."]);
  const [aiInput, setAiInput] = useState("");

  const askAi = () => {
    if (!aiInput.trim()) return;
    setAiMsgs(m => [...m, "You: " + aiInput, "🤖 Consider flying mid‑week — fares are usually cheaper."]);
    setAiInput("");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="px-6 py-4 bg-white shadow flex justify-between">
        <div className="flex items-center gap-2 font-bold text-xl">
          <Plane /> FlySmart
        </div>
        <div className="flex items-center gap-4 text-sm">
          <Shield className="w-4" /> Secure
          <Globe2 className="w-4" /> Global
          <button className="border px-3 py-1 rounded-xl flex items-center gap-2">
            <User className="w-4" /> Sign in
          </button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-6">
        <motion.div initial={{opacity:0}} animate={{opacity:1}}>
          <div className="bg-white p-6 rounded-2xl shadow">
            <h2 className="font-semibold text-lg flex items-center gap-2"><Search className="w-5"/>Search flights</h2>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div>
                <label>From</label>
                <input className="w-full border p-2 rounded" value={origin} onChange={e=>setOrigin(e.target.value)} />
              </div>
              <div>
                <label>To</label>
                <input className="w-full border p-2 rounded" value={destination} onChange={e=>setDestination(e.target.value)} />
              </div>
              <div>
                <label>Depart</label>
                <input type="date" className="w-full border p-2 rounded" value={depart} onChange={e=>setDepart(e.target.value)} />
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="md:col-span-2"></div>
          <aside>
            <div className="bg-white p-4 rounded-xl shadow h-80 flex flex-col">
              <h3 className="font-semibold flex items-center gap-2 mb-2"><Sparkles className="w-4"/> AI Co-pilot</h3>
              <div className="flex-1 overflow-auto text-sm border p-2 rounded bg-gray-50">
                {aiMsgs.map((m,i)=>(<div key={i} className="mb-2">{m}</div>))}
              </div>
              <div className="flex mt-2 gap-2">
                <input className="border p-2 rounded flex-1" value={aiInput} onChange={e=>setAiInput(e.target.value)} />
                <button onClick={askAi} className="px-3 py-2 bg-black text-white rounded">Ask</button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
