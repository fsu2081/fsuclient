import AdminNav from '@/components/NavBar/AdminNav';
import AdminTopNav from '@/components/NavBar/AdminTopNav';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AdminLayout = ({ Component, pageProps }) => {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  const [loading, setLoading] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  //This functions checks if the admin is authenticated or not
  const checkAdmin = async () => {
    setLoading(true);
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/isAdmin`,
        {
          credentials: 'include',
        }
      ).then((r) => {
        return r.json();
      });
      if (data.status === 'error') {
        router.push('/admin/login');
      } else {
        setIsAdmin(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!path.includes('/admin/login')) checkAdmin();
  }, [path]);

  //set the layout of the admin login page
  if (path.includes('/admin/login')) return <Component {...pageProps} />;

  // Wait until loading is complete and isAdmin is updated
  if (loading || !isAdmin) {
    return <div className="w-full h-full"></div>;
  } else
    return (
      <div className="w-full h-fit flex  ">
        <div>
          <AdminNav />
        </div>
        <div className="w-full h-fit flex flex-col">
          <AdminTopNav />
          <Component {...pageProps} />
        </div>
      </div>
    );
};

export default AdminLayout;
