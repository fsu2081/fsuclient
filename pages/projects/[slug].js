import { useRouter } from 'next/router';
import React from 'react';
import useSWR from 'swr';
import { Montserrat, Roboto, Inter } from 'next/font/google';
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

const ProjectSlug = ({ initialData }) => {
  const router = useRouter();
  const projectId = router.query.slug;

  const { data: project = [] } = useSWR(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project/${projectId}`,
    fetcher,
    { initialData }
  );

  return (
    <div className="md:min-h-[49rem] w-full pb-10  flex justify-center ">
      <div className="relative w-full md:w-[90%] mt-10 flex flex-col items-center bg-gray-200 min-h-[70vh] py-9 rounded">
        <div className="w-full md:w-fit ml-6 md:absolute md:left-6 md:top-6 mb-4 ">
          <svg
            width={40}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="cursor-pointer hover:scale-110 duration-300 w-[2rem] md:w-[3rem] "
            onClick={() => {
              router.push('/projects');
            }}
          >
            <path d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM384 288H205.3l49.38 49.38c12.5 12.5 12.5 32.75 0 45.25s-32.75 12.5-45.25 0L105.4 278.6C97.4 270.7 96 260.9 96 256c0-4.883 1.391-14.66 9.398-22.65l103.1-103.1c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L205.3 224H384c17.69 0 32 14.33 32 32S401.7 288 384 288z" />
          </svg>
        </div>
        <div className="text-center mb-9 w-[80%]">
          <span className={`text-4xl font-bold mb-9 ${montserrat.className}`}>
            {project.title}
          </span>
        </div>

        <div
          className={` ${montserrat.className} w-[90%] md:w-[90%] flex flex-col  `}
          dangerouslySetInnerHTML={{ __html: project.content }}
        />
      </div>
    </div>
  );
};

export default ProjectSlug;

export async function getServerSideProps(context) {
  const projectId = context.query.slug;
  const initialData = await fetcher(
    `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project/${projectId}`
  );
  return { props: { initialData } };
}
