import type {Metadata} from "next"; import {Syne,Plus_Jakarta_Sans,JetBrains_Mono} from "next/font/google"; import "./globals.css"; import Shell from "@/components/Shell";
const display=Syne({subsets:["latin"],weight:["600","700","800"],variable:"--font-display"});
const body=Plus_Jakarta_Sans({subsets:["latin"],weight:["400","500","600"],variable:"--font-body"});
const mono=JetBrains_Mono({subsets:["latin"],weight:["400","500","600"],variable:"--font-mono"});
export const metadata:Metadata={title:"Debojit Saha Jit — Robotics • AI • Innovation",description:"Personal archive and portfolio of Debojit Saha Jit."};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en" className={display.variable+" "+body.variable+" "+mono.variable}><body><Shell>{children}</Shell></body></html>}