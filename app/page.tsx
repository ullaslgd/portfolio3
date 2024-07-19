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
    <main className="relative flex lg:grid lg:grid-cols-2 lg:px-6 justify-center items-center bg-[#f2f3f5]  flex-col overflow-hidden m-auto">
      <FloatingNav navItems={[{name:'Home', link:'/',},{name: "About", link: "#about",},{name:"Skills", link: "#skills"},{name:"Projects", link:"#projects",}]}/>
     <div className="lg:grid lg:grid-cols-2">
     <Header />
     <About />
     <Skills />
     </div>
     <Projects />
     <div>
     <Certificates />
     <Contact />
     </div>
     <Footer />
    



    </main>
  );
}
