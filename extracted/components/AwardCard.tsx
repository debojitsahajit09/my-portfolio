"use client";
import {useState} from "react"; import {X,ArrowUpRight} from "lucide-react";
export default function AwardCard({a}:{a:{n:string;title:string;result:string;year:string;org:string;image:string;text:string}}){
  const [open,setOpen]=useState(false);
  return <article className="award">
    <div className="award-img"><img src={a.image} alt={a.title}/></div>
    <div className="award-body">
      <div className="eyebrow">{a.org} · {a.year}</div>
      <h2>{a.title}</h2>
      <span className="result">{a.result}</span><br/>
      <button className="btn" onClick={()=>setOpen(true)}>See details <ArrowUpRight size={14}/></button>
    </div>
    {open&&<div className="lightbox" onClick={()=>setOpen(false)}>
      <button aria-label="close" onClick={()=>setOpen(false)}><X/></button>
      <div className="award-modal" onClick={e=>e.stopPropagation()}>
        <img src={a.image} alt={a.title}/>
        <div className="eyebrow">{a.org} · {a.year}</div>
        <h2>{a.title}</h2>
        <span className="result">{a.result}</span>
        <p className="text">{a.text}</p>
      </div>
    </div>}
  </article>
}
