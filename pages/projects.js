// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';
// import {
//   AnimatePresence,
//   motion,
//   useAnimate,
//   usePresence,
// } from 'framer-motion';
// import { projects } from '@/data/projects';
// import ProjectCard from '@/components/ProjectCard';

// const Projects = () => {
//   const [selectedOption, setSelectedOption] = useState('all');
//   const [filteredProject, setFilteredProject] = useState();

//   const handleFilter = () => {
//     let filter = projects.filter((item) => {
//       if (selectedOption === 'all') {
//         return item;
//       } else if (selectedOption === item.category) {
//         return true;
//       } else {
//         return false;
//       }
//     });
//     setFilteredProject(filter);
//   };

//   const handleSelect = () => {
//     let btn = document.querySelectorAll('#filter')[0];
//     btn = btn.children;
//     for (let i = 0; i < btn.length; i++) {
//       btn[i].classList.add('hover:text-background-color');
//       btn[i].classList.remove('bg-white');
//       btn[i].classList.remove('text-background-color');
//       btn[i].classList.add('hover:bg-white');
//       if (selectedOption === btn[i].value) {
//         btn[i].classList.add('bg-white');
//         btn[i].classList.remove('hover:text-background-color');
//         btn[i].classList.remove('hover:bg-white');
//         btn[i].classList.add('text-background-color');
//       }
//     }
//   };

//   useEffect(() => {
//     handleFilter();
//     handleSelect();
//   }, [selectedOption]);

//   return (
//     <div className=" w-[100%] flex flex-col items-center mb-10 ">
//       <div className="flex w-[80%] justify-center mt-10  ">
//         <div
//           className="bg-background-color p-1 font-[Poppins] text-black rounded-lg bg-secondary-400 relative"
//           id="filter"
//         >
//           <button
//             onClick={(e) => {
//               setSelectedOption(e.target.value);
//             }}
//             value="all"
//             className="hover:bg-[white] hover:text-background-color px-5  py-2  rounded-lg mr-1 "
//           >
//             All
//           </button>
//           <button
//             onClick={(e) => {
//               setSelectedOption(e.target.value);
//             }}
//             value="Agriculture"
//             className="p-2 hover:bg-[white] hover:text-background-color px-5  py-2  rounded-lg mr-1 "
//           >
//             Agriculture
//           </button>
//           <button
//             onClick={(e) => {
//               setSelectedOption(e.target.value);
//             }}
//             value="Architecture"
//             className="p-2 hover:bg-[white] hover:text-background-color px-5  py-2  rounded-lg mr-1 "
//           >
//             Architecture
//           </button>
//           <button
//             onClick={(e) => {
//               setSelectedOption(e.target.value);
//             }}
//             value="Civil"
//             className="p-2 hover:bg-[white] hover:text-background-color px-5  py-2  rounded-lg mr-1 "
//           >
//             Civil
//           </button>
//           <button
//             onClick={(e) => {
//               setSelectedOption(e.target.value);
//             }}
//             value="Computer"
//             className="p-2 hover:bg-[white] hover:text-background-color px-5  py-2  rounded-lg mr-1 "
//           >
//             Computer
//           </button>
//           <button
//             onClick={(e) => {
//               setSelectedOption(e.target.value);
//             }}
//             value="Electrical"
//             className="p-2 hover:bg-[white] hover:text-background-color px-5  py-2  rounded-lg mr-1 "
//           >
//             Electrical
//           </button>
//           <button
//             onClick={(e) => {
//               setSelectedOption(e.target.value);
//             }}
//             value="Electronics"
//             className="p-2 hover:bg-[white] hover:text-background-color px-5  py-2  rounded-lg mr-1 "
//           >
//             Electronics
//           </button>
//           <button
//             onClick={(e) => {
//               setSelectedOption(e.target.value);
//             }}
//             value="Mechanical"
//             className="p-2 hover:bg-[white] hover:text-background-color px-5  py-2  rounded-lg "
//           >
//             Mechanical
//           </button>
//         </div>
//       </div>
//       <AnimatePresence>
//         <motion.div className="flex flex-wrap w-[80%]">
//           {filteredProject &&
//             filteredProject.map((item, i) => (
//               <ProjectCard key={i} item={item} index={i} />
//             ))}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Projects;

import ProjectCard from '@/components/ProjectCard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import { Montserrat, Roboto, Inter } from 'next/font/google';
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from '@mui/icons-material';
const montserrat = Montserrat({
  weight: ['100', '300', '500', '600', '700', '800'],
  subsets: ['latin'],
});
const roboto = Roboto({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
});
const inter = Inter({
  weight: ['100', '300', '500', '700'],
  subsets: ['latin'],
});

const fetcher = (url) => fetch(url).then((res) => res.json());

const Projects = ({ initialData }) => {
  const [loading, setLoading] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const { data: projects } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project?page=${router.query.slug}`,
    fetcher,
    { initialData }
  );
  console.log(projects);

  useEffect(() => {
    if (projects) {
      setTotalPages(projects.totalPages);
      console.log(projects);
      setLoading(false);
    }
  }, [projects]);

  const handlePageClick = (pageNumber) => {
    router.push(`/projects/page/${pageNumber}`);
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
    <div className="md:min-h-[49rem] w-full md:mt-10 flex justify-center ">
      <div
        className={`flex flex-col items-center bg-gray-200 h-full py-5 rounded w-full md:w-[70%] ${montserrat.className}`}
      >
        <h1 className=" md:text-[40px] font-bold">List of Projects</h1>
        <div className="w-full flex justify-center min-h-[36rem] ">
          <table className="w-[90%] md:w-[60%] h-fit mt-10 border-2 border-gray-600">
            <thead className="w-full border-2 border-gray-600">
              <tr className="w-full  border-2 border-gray-600">
                <th className="w-[12%] py-2 border-2 border-gray-600">
                  <div className="w-full ">SN</div>
                </th>
                <th className="w-[95%] py-2 border-2 border-gray-600">
                  <div className="w-full">Name of Project</div>
                </th>
              </tr>
            </thead>
            <tbody className="w-full">
              {projects?.docs?.map((project, i) => (
                <tr
                  className={`w-full ${
                    i % 2 == 0 ? 'bg-[#90bdf867]' : 'bg-[#ffffff5b]'
                  } `}
                  key={project.id}
                >
                  <td className="w-[5%] border-2 border-gray-600">
                    <div className="w-full text-center">{i + 1}</div>
                  </td>
                  <td className="w-[95%] py-2 border-2 border-gray-600">
                    <div className="w-full text-center">
                      <Link href={`projects/${project._id}`}>
                        {project.title}
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {projects?.docs && (
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
              className="w-full h-full disabled:text-neutral-300 text-black "
            >
              <ArrowForwardIosOutlined />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;

export async function getServerSideProps() {
  const initialData = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project`
  );
  return { props: { initialData } };
}
