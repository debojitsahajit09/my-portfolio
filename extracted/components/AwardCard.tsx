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
    <article className="award flex flex-col gap-3 font-mono mb-16 text-neutral-900 dark:text-neutral-100">
      {/* ১. সিরিয়াল নম্বর: লাইট মোডে ডার্ক ধূসর/কালো এবং ডার্ক মোডে সাদা */}
      <div className="text-5xl md:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
        {a.n}<span className="text-[#10b981]">.</span>
      </div>

      {/* ২. ইস্যু ডেট / বছর */}
      <div className="text-neutral-500 dark:text-neutral-400 text-sm font-semibold">
        Issued: {a.year}
      </div>

      {/* ৩. পিকচার */}
      {a.image && (
        <div className="award-img my-2 overflow-hidden rounded-lg w-full max-h-[450px]">
          <img src={a.image} alt={a.title} className="w-full h-full object-cover" />
        </div>
      )}

      {/* ৪. বড় শিরোনাম: লাইট মোডে স্পষ্ট কালো/ডার্ক আর ডার্ক মোডে স্পষ্ট সাদা */}
      <h2 className="text-2xl md:text-4xl font-extrabold leading-tight tracking-tight mt-1 text-neutral-900 dark:text-white">
        {a.result} - {a.title}
      </h2>

      {/* ৫. নিচে ইস্যুকারী সংস্থা এবং পাশে সি ডিটেইলস বাটন */}
      <div className="flex items-center justify-between flex-wrap gap-4 mt-1">
        <div className="text-[#10b981] font-semibold text-base md:text-lg">
          Issued By: {a.org}
        </div>

        <button
          className="btn flex items-center gap-1.5 text-sm md:text-base text-[#10b981] font-bold hover:underline"
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
            <div className="text-4xl font-extrabold my-2 text-neutral-900 dark:text-white">
              {a.n}<span className="text-[#10b981]">.</span>
            </div>
            <h2 className="text-neutral-900 dark:text-white">{a.result} - {a.title}</h2>
            <div className="text-[#10b981] font-semibold my-1">
              Issued By: {a.org} · {a.year}
            </div>
            <p className="text text-neutral-700 dark:text-neutral-300">{a.text}</p>
          </div>
        </div>
      )}
    </article>
  );
}
