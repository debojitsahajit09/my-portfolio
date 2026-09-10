"use client";
import Link from "next/link"; import {usePathname} from "next/navigation"; import {Menu,X,Sun,Moon,ArrowRight} from "lucide-react"; import {useEffect,useState} from "react"; import {AnimatePresence,motion} from "framer-motion";
const links=[["/","Home"],["/about","About"],["/projects","Projects"],["/achievements","Achievements"],["/publications","Publications"],["/certifications","Certifications"],["/experience","Experience"],["/competitions","Competitions"],["/life","Life & Skills"],["/contact","Contact"]];
export default function Shell({children}:{children:React.ReactNode}){
  const path=usePathname();const[open,setOpen]=useState(false);const[dark,setDark]=useState(false);
  useEffect(()=>{const d=localStorage.getItem("theme")==="dark";setDark(d);document.documentElement.classList.toggle("dark",d)},[]);
  function theme(){const d=!dark;setDark(d);document.documentElement.classList.toggle("dark",d);localStorage.setItem("theme",d?"dark":"light")}
  return <>
    <header className="nav"><div className="wrap navin">
      <Link href="/" className="logo">Debojit<span>.</span></Link>
      <div className="navtools">
        <button onClick={theme} aria-label="theme">{dark?<Sun size={16}/>:<Moon size={16}/>}</button>
        <button onClick={()=>setOpen(true)} aria-label="menu"><Menu size={16}/></button>
      </div>
    </div></header>
    <AnimatePresence>{open&&<>
      <motion.div className="scrim" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={()=>setOpen(false)}/>
      <motion.div className="navpanel" initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}} transition={{duration:.32,ease:[0.22,1,0.36,1]}}>
        <div className="navpanel-head"><span className="logo">Debojit<span>.</span></span><button onClick={()=>setOpen(false)} aria-label="close" style={{border:"1px solid var(--line)",borderRadius:"50%",width:40,height:40,display:"grid",placeItems:"center",background:"var(--card)"}}><X size={16}/></button></div>
        {links.map(([href,label])=><Link onClick={()=>setOpen(false)} key={href} className={path===href?"active":""} href={href}>{label}<ArrowRight size={16}/></Link>)}
      </motion.div>
    </>}</AnimatePresence>
    <AnimatePresence mode="wait">
      <motion.div key={path} className="pagewrap"
        initial={{opacity:0,clipPath:"inset(8% 0% 8% 0%)"}}
        animate={{opacity:1,clipPath:"inset(0% 0% 0% 0%)"}}
        exit={{opacity:0,clipPath:"inset(8% 0% 8% 0%)"}}
        transition={{duration:.5,ease:[0.83,0,0.17,1]}}>
        <motion.span className="scanline"
          initial={{scaleX:0,opacity:1}}
          animate={{scaleX:[0,1,1],opacity:[1,1,0]}}
          transition={{duration:.6,times:[0,.45,1],ease:"easeInOut"}}/>
        {children}
      </motion.div>
    </AnimatePresence>
    <footer><div className="wrap foot">
      <div><b>Debojit Saha Jit</b><p>Robotics • AI • Embedded Systems • Innovation</p></div>
      <div><p>© 2026 Debojit Saha Jit</p><p>Last updated: September 2026</p></div>
    </div></footer>
  </>
}
