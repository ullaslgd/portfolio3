import Image from "next/image";
import Header from "../components/Header"
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Contact from "@/components/Contact";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative flex flex-col justify-center items-center  overflow-hidden m-auto">
      <FloatingNav navItems={[{name:'Home', link:'/',},{name: "About", link: "#about",},{name:"Skills", link: "#skills"},{name:"Projects", link:"#projects",}]}/>
     
     <Header />
     <About />
     <Skills />
  
     <Projects />
  
     <Certificates />
     <Contact />
 
     <Footer />
    



    </main>
  );
}
