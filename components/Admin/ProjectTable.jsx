import { Delete } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';

const ProjectTable = () => {
  //Define a fetcher function
  const fetcher = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  const { data: projects = [], mutate } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project?page=all`,
    fetcher
  );

  const handleDelete = async (projectId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project/${projectId}`,
        {
          method: 'DELETE',
        }
      );
      console.log(response);

      if (response.status === 200) {
        // Refresh projects after deletion (or use SWR's mutate function to update the cache)
        // For simplicity, you can refetch all projects
        mutate(
          `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project?page=all`
        );
      } else {
        console.error('Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
    }
  };

  return (
    <div className="h-full w-full bg-white rounded-lg p-2 px-8 py-8 ">
      <div className="text-2xl font-semibold w-full">
        <span>Project Board</span>
      </div>
      <div className=" w-full h-[90%] overflow-scroll overflow-x-hidden mt-8 flex flex-col gap-4 pt-4 ">
        {Array.isArray(projects) &&
          projects.map((project, index) => {
            const utcDate = new Date(project.createdAt);
            const isPDF = project?.image?.toLowerCase().endsWith('.pdf');
            return (
              <div
                key={project._id}
                className="w-full flex flex-col items-center px-4 gap-4 text-black  "
              >
                <div className="w-full rounded-lg bg-neutral-50 p-4 flex gap-10 ">
                  <div className="w-full relative ">
                    <div className="w-full flex flex-col gap-4">
                      <Link className="w-fit" href={`/project/${project._id}`}>
                        <span className="text-lg font-bold hover:text-primary-400 ">
                          {project.title}
                        </span>
                      </Link>
                    </div>
                    <div className="w-full absolute bottom-0 right-0 flex justify-end ">
                      <div
                        onClick={() => {
                          handleDelete(project._id);
                        }}
                        className="border-[2px] text-sm py-1 px-2 flex justify-center items-center cursor-pointer duration-300 rounded-lg text-red-500 border-red-500 hover:bg-red-500 hover:text-white  "
                      >
                        {/* <Delete color="inherit" fontSize="inherit" /> */}
                        <span>Delete</span>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="w-full border-[1px]" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProjectTable;
