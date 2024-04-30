import AdminLayout from '@/layouts/AdminLayout';
import Layout from '@/layouts/Layout';
import '@/styles/globals.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const path = router.pathname;

  if (path.includes('/admin')) {
    return <AdminLayout Component={Component} pageProps={pageProps} />;
  } else if (
    path.includes('/login') ||
    path.includes('/register')
    // || path.includes('/404')
  )
    return <Component {...pageProps} />;
  return <Layout Component={Component} pageProps={pageProps} />;
}
