import { useState, useEffect } from 'react';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import ScrollProgress from './components/layout/ScrollProgress';
import CursorBlob from './components/layout/CursorBlob';
import FloatingCTA from './components/layout/FloatingCTA';
import HomePage from './pages/HomePage';
import BotPage from './pages/BotPage';

/**
 * Root App — hash-based routing between home and bot detail page.
 */
export default function App() {
    const [page, setPage] = useState(window.location.hash);

    useEffect(() => {
        const onHash = () => setPage(window.location.hash);
        window.addEventListener('hashchange', onHash);
        return () => window.removeEventListener('hashchange', onHash);
    }, []);

    const isBotPage = page === '#/bot';

    return (
        <div style={{ minHeight: '100vh' }}>
            <CursorBlob />
            <ScrollProgress />
            <Nav />
            {isBotPage ? <BotPage /> : <HomePage />}
            <Footer />
            {!isBotPage && <FloatingCTA />}
        </div>
    );
}
