import { useReveal } from '../hooks/useReveal';
import Hero from '../components/sections/Hero/Hero';
import Marquee from '../components/sections/Marquee';
import Services from '../components/sections/Services';
import Producto from '../components/sections/Producto/Producto';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

/**
 * Home page — clean, concise landing page.
 */
export default function HomePage() {
    useReveal();

    return (
        <>
            <Hero />
            <Marquee />
            <Services />
            <Producto />
            <Projects />
            <Contact />
        </>
    );
}
