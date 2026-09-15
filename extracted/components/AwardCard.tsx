"use client";
import { useState } from "react";
import { X, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function AwardCard({
  a,
}: {
  a: {
    n: string;
    title: string;
    result: string;
    year: string;
    org: string;
    image?: string;
    images?: string[];
    text: string;
  };
}) {
  const [open, setOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  // ছবিগুলোর লিস্ট তৈরি (একাধিক images থাকলে সেটা নিবে, না থাকলে সিঙ্গেল image ব্যবহার করবে)
  const imageList = a.images && a.images.length > 0 
    ? a.images 
    : a.image 
      ? [a.image] 
      : [];

  const handleNextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev + 1) % imageList.length);
  };

  const handlePrevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    setImgIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

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

      {/* ৩. পিকচার (সোয়াইপ সুবিধাসহ ১টি করে প্রদর্শিত হবে) */}
      {imageList.length > 0 && (
        <div className="award-img my-2 relative overflow-hidden rounded-lg w-full max-h-[400px] group flex items-center justify-center bg-black/5">
          <img 
            src={imageList[imgIndex]} 
            alt={`${a.title} - ${imgIndex + 1}`} 
            className="w-full h-full object-cover transition-all duration-300" 
          />

          {/* একাধিক ছবি থাকলে Prev/Next সোয়াইপ বাটন */}
          {imageList.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrevImg}
                className="absolute left-2 p-2 rounded-full bg-black/60 text-white hover:bg-[#10b981] hover:text-black transition-all backdrop-blur-sm"
                aria-label="Previous Image"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={handleNextImg}
                className="absolute right-2 p-2 rounded-full bg-black/60 text-white hover:bg-[#10b981] hover:text-black transition-all backdrop-blur-sm"
                aria-label="Next Image"
              >
                <ChevronRight size={18} />
              </button>
              
              {/* ছবি নম্বর কাউন্টার */}
              <div className="absolute bottom-2 bg-black/60 backdrop-blur-sm text-white px-2.5 py-0.5 rounded-full text-xs">
                {imgIndex + 1} / {imageList.length}
              </div>
            </>
          )}
        </div>
      )}

      {/* ৪. শিরোনাম */}
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
            {imageList.length > 0 && (
              <img src={imageList[imgIndex]} alt={a.title} />
            )}
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
