"use client";
import { useState } from "react";
import { X, ArrowUpRight } from "lucide-react";

export default function AwardCard({
  a,
}: {
  a: {
    n: string;
    title: string;
    result: string;
    year: string;
    org: string;
    image: string;
    text: string;
  };
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="award flex flex-col gap-3 font-mono mb-12 bg-transparent p-0 border-0">
      {/* ১. সিরিয়াল নম্বর */}
      <div className="text-4xl md:text-5xl font-extrabold tracking-tight" style={{ color: "var(--fg, currentColor)" }}>
        {a.n}<span className="text-[#10b981]">.</span>
      </div>

      {/* ২. ইস্যু ডেট / বছর: সবুজ রঙে */}
      <div className="text-[#10b981] text-xs md:text-sm font-semibold">
        Issued: {a.year}
      </div>

      {/* ৩. পিকচার */}
      {a.image && (
        <div className="award-img my-2 overflow-hidden rounded-lg w-full max-h-[400px]">
          <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* ৪. শিরোনাম: সাইজ বাড়ানো হয়েছে এবং লাইট মোডে কালো ও ডার্ক মোডে সাদা হবে */}
      <h2 
        className="text-xl md:text-3xl font-extrabold leading-snug tracking-tight mt-1"
        style={{ color: "var(--fg, currentColor)" }}
      >
        <span className="text-[#10b981]">{a.result}</span> - {a.title}
      </h2>

      {/* ৫. নিচে ইস্যুকারী সংস্থা এবং পাশে সি ডিটেইলস বাটন */}
      <div className="flex items-center justify-between flex-wrap gap-3 mt-1 pb-4 border-b border-[#10b981]/30">
        <div className="text-[#10b981] font-semibold text-sm md:text-base">
          Issued By: {a.org}
        </div>

        <button
          className="btn flex items-center gap-1 text-xs md:text-sm text-[#10b981] font-bold hover:underline"
          onClick={() => setOpen(true)}
        >
          See details <ArrowUpRight size={16} />
        </button>
      </div>

      {/* লাইটবক্স / মোডাল */}
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)}>
          <button aria-label="close" onClick={() => setOpen(false)}>
            <X />
          </button>
          <div className="award-modal" onClick={(e) => e.stopPropagation()}>
            {a.image && <img src={a.image} alt={a.title} />}
            <div className="text-3xl font-extrabold my-2" style={{ color: "var(--fg, currentColor)" }}>
              {a.n}<span className="text-[#10b981]">.</span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold" style={{ color: "var(--fg, currentColor)" }}>
              <span className="text-[#10b981]">{a.result}</span> - {a.title}
            </h2>
            <div className="text-[#10b981] font-semibold text-sm my-1">
              Issued By: {a.org} · {a.year}
            </div>
            <p className="text text-sm opacity-90">{a.text}</p>
          </div>
        </div>
      )}
    </article>
  );
}
