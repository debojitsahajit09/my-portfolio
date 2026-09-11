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
    <article className="award flex flex-col gap-2.5 font-mono mb-10 text-neutral-900 dark:text-neutral-100 p-5 rounded-xl border border-[#10b981] bg-transparent">
      {/* ১. সিরিয়াল নম্বর: লাইট মোডে ডার্ক এবং ডার্ক মোডে সাদা */}
      <div className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
        {a.n}<span className="text-[#10b981]">.</span>
      </div>

      {/* ২. ইস্যু ডেট / বছর: সবুজ রঙে */}
      <div className="text-[#10b981] text-xs md:text-sm font-semibold">
        Issued: {a.year}
      </div>

      {/* ৩. পিকচার */}
      {a.image && (
        <div className="award-img my-1.5 overflow-hidden rounded-lg w-full max-h-[350px]">
          <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* ৪. শিরোনাম: ফন্ট সাইজ ছোট করা হয়েছে (text-lg md:text-xl) এবং মোড অনুযায়ী ডাইনামিক কালার */}
      <h2 className="text-lg md:text-xl font-bold leading-snug tracking-tight mt-0.5 text-neutral-900 dark:text-white">
        <span className="text-[#10b981]">{a.result}</span> - {a.title}
      </h2>

      {/* ৫. নিচে ইস্যুকারী সংস্থা এবং পাশে সি ডিটেইলস বাটন */}
      <div className="flex items-center justify-between flex-wrap gap-3 mt-1 pt-2 border-t border-[#10b981]/20">
        <div className="text-[#10b981] font-semibold text-sm md:text-base">
          Issued By: {a.org}
        </div>

        <button
          className="btn flex items-center gap-1 text-xs md:text-sm text-[#10b981] font-bold hover:underline"
          onClick={() => setOpen(true)}
        >
          See details <ArrowUpRight size={15} />
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
            <div className="text-2xl font-extrabold my-2 text-neutral-900 dark:text-white">
              {a.n}<span className="text-[#10b981]">.</span>
            </div>
            <h2 className="text-lg md:text-xl font-bold text-neutral-900 dark:text-white">
              <span className="text-[#10b981]">{a.result}</span> - {a.title}
            </h2>
            <div className="text-[#10b981] font-semibold text-sm my-1">
              Issued By: {a.org} · {a.year}
            </div>
            <p className="text text-sm text-neutral-700 dark:text-neutral-300">{a.text}</p>
          </div>
        </div>
      )}
    </article>
  );
}
