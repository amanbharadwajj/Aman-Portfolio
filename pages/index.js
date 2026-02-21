import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Work_Experience from "../components/Work-Experience";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Aman | Portfolio</title>
                <meta
                    name="description"
                    content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
                />
                <link rel="icon" href="/assets/page/aLogo.png" />
            </Head>
            <Main />
            <About />
            <Skills />
            <Projects />
            <Work_Experience/>
            <Contact />
        </div>
    );
}
