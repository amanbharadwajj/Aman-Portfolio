import Navbar from '../components/Navbar';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const isAlternatePage = router.pathname !== '/';
    document.body.classList.toggle('alt-page', isAlternatePage);
  }, [router.pathname]);

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
