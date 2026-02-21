import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Certifications from "../components/Certifications";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Work_Experience from "../components/Work-Experience";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Aman | Portfolio</title>
                <meta
                    name="description"
                    content="Business Development portfolio focused on sales strategy, performance marketing, and growth case studies."
                />
                <link rel="icon" href="/assets/page/aLogo.png" />
            </Head>
            <Main />
            <About />
            <Skills />
            <Projects />
            <Work_Experience/>
            <Testimonials />
            <Certifications />
            <Contact />
        </div>
    );
}
