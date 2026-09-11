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
    <article className="award flex flex-col gap-3 font-mono mb-12">
      {/* ১. সিরিয়াল নম্বর (বড় ও মোটা হরফে) */}
      <div className="text-5xl font-extrabold text-black dark:text-white tracking-tight">
        {a.n}
      </div>

      {/* ২. টাইটেল + রেজাল্ট (বড় শিরোনাম) */}
      <h2 className="text-2xl md:text-3xl font-bold text-black dark:text-white leading-tight">
        {a.result} - {a.title}
      </h2>

      {/* ৩. ইস্যুকারী সংস্থা ও তারিখ (সবুজ কালার) */}
      <div className="text-[#10b981] font-semibold text-base">
        Issued By: {a.org} {a.year && `· ${a.year}`}
      </div>

      {/* ৪. বিস্তারিত বর্ণনা */}
      <p className="text-gray-600 dark:text-gray-300 font-sans text-sm md:text-base leading-relaxed">
        {a.text}
      </p>

      {/* ৫. ইমেজ / প্রফাইল ছবি (যদি থাকে) */}
      {a.image && (
        <div className="award-img my-2 overflow-hidden rounded-lg">
          <img src={a.image} alt={a.title} className="w-full object-cover" />
        </div>
      )}

      {/* ডিটেইলস বাটন */}
      <div>
        <button
          className="btn flex items-center gap-1.5 text-sm text-[#10b981] font-semibold hover:underline mt-1"
          onClick={() => setOpen(true)}
        >
          See details <ArrowUpRight size={14} />
        </button>
      </div>

      {/* লাইটবক্স / মোডাল */}
      {open && (
        <div className="lightbox" onClick={() => setOpen(false)}>
          <button aria-label="close" onClick={() => setOpen(false)}>
            <X />
          </button>
          <div className="award-modal" onClick={(e) => e.stopPropagation()}>
            <img src={a.image} alt={a.title} />
            <div className="text-4xl font-extrabold text-black dark:text-white mb-2">{a.n}</div>
            <h2>{a.result} - {a.title}</h2>
            <div className="text-[#10b981] font-semibold my-1">
              Issued By: {a.org} · {a.year}
            </div>
            <p className="text">{a.text}</p>
          </div>
        </div>
      )}
    </article>
  );
}
