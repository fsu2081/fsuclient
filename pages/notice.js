// import NoticeCard from '@/components/NoticeCard';
// import {
//   ArrowBackIosNewOutlined,
//   ArrowForwardIosOutlined,
// } from '@mui/icons-material';
// // import { notices } from '@/data/data';
// import React, { useEffect, useState } from 'react';
// import Skeleton from 'react-loading-skeleton';
// import 'react-loading-skeleton/dist/skeleton.css';
// import useSWR from 'swr';
// const fetcher = (url) => fetch(url).then((res) => res.json());

// const Notice = ({ initialData }) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [loadingPages, setLoadingPages] = useState({
//     [currentPage]: true,
//   });

//   const { data: notices, mutate } = useSWR(
//     `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/notice?page=${currentPage}`,
//     fetcher,
//     { initialData }
//   );

//   useEffect(() => {
//     if (notices) {
//       setTotalPages(notices.totalPages);
//       console.log(notices);
//       setLoadingPages((prevState) => ({
//         ...prevState,
//         [currentPage]: false,
//       }));
//     }
//   }, [notices]);

//   useEffect(() => {
//     if (!loadingPages[currentPage]) {
//       setLoadingPages((prevState) => ({
//         ...prevState,
//         [currentPage]: true,
//       }));
//     }
//   }, [currentPage]);

//   const handlePageClick = (pageNumber) => {
//     setCurrentPage(pageNumber);
//     setLoadingPages((prevState) => ({
//       ...prevState,
//       [currentPage]: true,
//     }));
//     mutate();
//   };

//   console.log(loadingPages[currentPage]);

//   const renderPagination = () => {
//     const pages = [];
//     for (let i = 1; i <= totalPages; i++) {
//       if (i == 1) {
//         pages.push(
//           <button
//             key={i}
//             onClick={() => handlePageClick(i)}
//             className={`mx-1 px-3 py-2 ${
//               currentPage === i
//                 ? 'bg-blue-500 text-white'
//                 : 'bg-gray-200 text-black'
//             }`}
//           >
//             {i}
//           </button>
//         );
//       } else if (Math.abs(currentPage - i) <= 2) {
//         pages.push(
//           <button
//             key={i}
//             onClick={() => handlePageClick(i)}
//             className={`mx-1 px-3 py-2 ${
//               currentPage === i
//                 ? 'bg-blue-500 text-white'
//                 : 'bg-gray-200 text-black'
//             }`}
//           >
//             {i}
//           </button>
//         );
//       } else if (i == totalPages) {
//         pages.push(
//           <button
//             key={i}
//             onClick={() => handlePageClick(i)}
//             className={`mx-1 px-3 py-2 ${
//               currentPage === i
//                 ? 'bg-blue-500 text-white'
//                 : 'bg-gray-200 text-black'
//             }`}
//           >
//             {i}
//           </button>
//         );
//       } else if (Math.abs(currentPage - i) == 3) {
//         pages.push(
//           <button
//             key={i}
//             onClick={() => handlePageClick(i)}
//             className={`mx-1 px-3 py-2 ${
//               currentPage === i
//                 ? 'bg-blue-500 text-white'
//                 : 'bg-gray-200 text-black'
//             }`}
//           >
//             ...
//           </button>
//         );
//       }
//     }
//     return pages;
//   };

//   return (
//     <div className="w-full min-h-[49rem] flex justify-center py-16 bg-neutral-100 ">
//       <div className="w-full flex justify-center ">
//         <div className="w-[65%] h-full flex flex-col items-center ">
//           <div className="w-full min-h-[44rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
//             {loadingPages[currentPage] ? (
//               <>
//                 {Array.from({ length: 6 }, (_, i) => (
//                   <div
//                     key={i}
//                     className="w-[90%] min-h-[20rem] flex flex-col gap-4 mb-4 "
//                   >
//                     <Skeleton className="h-[10rem]" />
//                     <Skeleton className="h-[2rem]" width={'100%'} />
//                     <Skeleton className="h-[1.5rem]" width={'80%'} />
//                   </div>
//                 ))}
//               </>
//             ) : (
//               <>
//                 {notices?.docs?.map((notice, index) => (
//                   <div key={index} className="w-full flex justify-center mb-4">
//                     <NoticeCard notice={notice} />
//                   </div>
//                 ))}
//               </>
//             )}
//           </div>
//           {notices?.docs && (
//             <div className="h-full flex items-center ">
//               <button
//                 onClick={() => handlePageClick(currentPage - 1)}
//                 disabled={currentPage === 1}
//                 className="w-full h-full disabled:text-neutral-300 text-black "
//               >
//                 <ArrowBackIosNewOutlined color="inherit" />
//               </button>
//               {renderPagination()}
//               <button
//                 onClick={() => handlePageClick(currentPage + 1)}
//                 disabled={currentPage === totalPages}
//                 className="w-full h-full disabled:text-neutral-300 text-black "
//               >
//                 <ArrowForwardIosOutlined />
//               </button>
//             </div>
//           )}
//         </div>
//         <div className="w-[25%] ">Recent Notice</div>
//       </div>
//     </div>
//   );
// };

// export default Notice;

// export async function getServerSideProps() {
//   const initialData = await fetcher(
//     `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/notice`
//   );
//   return { props: { initialData } };
// }

import FollowUs from '@/components/FollowUs';
import NoticeCard from '@/components/NoticeCard';
import RecentNotice from '@/components/RecentNotice';
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

const Notice = ({ initialData }) => {
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const router = useRouter();
  console.log(router.pathname);
  const { data: notices } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/notice?page=${router.query.slug}`,
    fetcher,
    { initialData }
  );

  useEffect(() => {
    if (notices) {
      setTotalPages(notices.totalPages);
      console.log(notices);
      setLoading(false);
    }
  }, [notices]);

  const handlePageClick = (pageNumber) => {
    router.push(`/notice/page/${pageNumber}`);
    setCurrentPage(pageNumber);
    setLoading(true);
  };

  const renderPagination = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i == 1) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`mx-1 px-3 py-2 ${
              currentPage === i
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {i}
          </button>
        );
      } else if (Math.abs(currentPage - i) <= 2) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`mx-1 px-3 py-2 ${
              currentPage === i
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {i}
          </button>
        );
      } else if (i == totalPages) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`mx-1 px-3 py-2 ${
              currentPage === i
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            {i}
          </button>
        );
      } else if (Math.abs(currentPage - i) == 3) {
        pages.push(
          <button
            key={i}
            onClick={() => handlePageClick(i)}
            className={`mx-1 px-3 py-2 ${
              currentPage === i
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-black'
            }`}
          >
            ...
          </button>
        );
      }
    }
    return pages;
  };
  return (
    <div className="w-full min-h-[49rem] flex justify-center py-16 bg-neutral-100 ">
      <div className="w-full flex justify-center ">
        <div className="w-full md:w-[65%] h-full flex flex-col items-center ">
          <div className="w-full min-h-[44rem] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 ">
            {loading ? (
              <>
                {Array.from({ length: 6 }, (_, i) => (
                  <div
                    key={i}
                    className="w-[90%] min-h-[20rem] flex flex-col gap-4 mb-4 "
                  >
                    <Skeleton className="h-[10rem]" />
                    <Skeleton className="h-[2rem]" width={'100%'} />
                    <Skeleton className="h-[1.5rem]" width={'80%'} />
                  </div>
                ))}
              </>
            ) : (
              <>
                {notices?.docs?.map((notice, index) => (
                  <div key={index} className="w-full flex justify-center mb-6">
                    <NoticeCard notice={notice} />
                  </div>
                ))}
              </>
            )}
          </div>
          {notices?.docs && (
            <div className="h-fit flex items-center ">
              <button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-full h-full disabled:text-neutral-300 text-black "
              >
                <ArrowBackIosNewOutlined color="inherit" />
              </button>
              {renderPagination()}
              <button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-full h-full disabled:text-neutral-300 text-black"
              >
                <ArrowForwardIosOutlined />
              </button>
            </div>
          )}
        </div>
        <div className="w-[25%] hidden md:flex flex-col gap-8 ">
          <RecentNotice />
          <FollowUs />
        </div>
      </div>
    </div>
  );
};

export default Notice;

export async function getServerSideProps() {
  const initialData = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/notice`
  );
  return { props: { initialData } };
}
