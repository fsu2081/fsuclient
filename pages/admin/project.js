import NoticeBoard from '@/components/Admin/NoticeBoard';
import ProjectTable from '@/components/Admin/projectTable';
import Loading from '@/utils/loading';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), {
  ssr: false, // This ensures the component is only rendered on the client side
});

const Project = () => {
  // const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  // const [teamMembers, setTeamMembers] = useState([]);
  const [content, setContent] = useState('');
  const router = useRouter();
  console.log(content);

  // const handleAddTeamMember = () => {
  //   setTeamMembers([...teamMembers, { name: '', role: '', email: '' }]);
  // };
  // const handleRemoveTeamMember = (index) => {
  //   const updatedTeamMembers = [...teamMembers];
  //   updatedTeamMembers.splice(index, 1);
  //   setTeamMembers(updatedTeamMembers);
  // };

  // const handleTeamChange = (e, index, field) => {
  //   const updatedTeamMembers = [...teamMembers];
  //   updatedTeamMembers[index][field] = e.target.value;
  //   setTeamMembers(updatedTeamMembers);
  // };

  // const handleAddImage = (e) => {
  //   const fileInput = document.getElementById('image');
  //   const file = fileInput.files[0];
  //   if (file) {
  //     let reader = new FileReader();
  //     const blob = new Blob([file], { type: file.type });

  //     reader.readAsDataURL(blob);
  //     reader.onload = function (event) {
  //       document.getElementById('preview').src = event.target.result;
  //       setImageUrl(event.target.result);
  //     };
  //   } else {
  //     // setImageUrl('');
  //   }
  // };

  const handleResetClick = () => {
    const titleInput = document.getElementById('title');
    if (titleInput) {
      titleInput.value = '';
    }
    const contentInput = document.getElementById('content');
    if (contentInput) {
      contentInput.value = '';
    }

    // const imageInput = document.getElementById('image');
    // if (imageInput) {
    //   imageInput.value = '';
    // }

    // const previewImage = document.getElementById('preview');
    // if (previewImage) {
    //   previewImage.src = '';
    // }

    // setImageUrl('');
  };

  const handlePublishClick = async (e) => {
    e.preventDefault();
    const title = document.getElementById('title');
    // const image = document.getElementById('image');
    // const content = document.getElementById('content');
    // const github = document.getElementById('github');
    // const youtube = document.getElementById('youtube');
    // const website = document.getElementById('website');
    try {
      setLoading(true);
      //creating formData
      const formData = new FormData();
      formData.append('title', title.value);
      // formData.append('image', image.files[0]);
      // formData.append('content', content.value);
      formData.append('content', content);
      // formData.append('github', github.value);
      // formData.append('youtube', youtube.value);
      // formData.append('website', website.value);
      // formData.append('team', JSON.stringify(teamMembers));
      console.log(formData);

      //send data to server
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/project`,
        {
          method: 'POST',
          body: formData,
        }
      );
      if (response.status == 201) {
        handleResetClick();
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      router.refresh();
    }
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  if (loading) {
    return (
      <div className="w-full min-h-[55rem] z-[100] flex justify-center items-center text-white ">
        <div className="w-[5rem] h-[5rem] relative flex flex-col justify-center items-center text-black ">
          <Loading />
        </div>
      </div>
    );
  } else
    return (
      <div className="w-full h-fit min-h-[calc(100vh-4rem)] flex flex-col bg-neutral-200 px-8 pb-10 ">
        <div className=" mt-6">
          <h1 className="text-4xl ">Project</h1>
        </div>
        {/* Project Box */}
        <div className="w-full min-h-[45rem] border-2 flex mt-4 gap-8 justify-center ">
          <div className=" min-w-[60%] h-fit bg-white rounded-lg p-2 px-8 py-8 ">
            <div className="text-2xl font-semibold ">
              <span>Post a Project</span>
            </div>
            {/* Project form */}
            <form
              encType="multipart/form-data"
              className="w-full flex flex-col mt-4 gap-4 "
              onSubmit={handlePublishClick}
            >
              <div className="flex flex-col w-full gap-2 ">
                <label htmlFor="title" className="text-lg">
                  Title
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-neutral-100 py-2 rounded-lg px-2 outline-none "
                />
              </div>
              {/* <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="image">Image</label>
              <input
                type="file"
                name="image"
                id="image"
                className="bg-neutral-100"
                onChange={(e) => handleAddImage(e)}
              />
              <div className={`${imageUrl ? 'flex' : 'hidden'}`}>
                <Image
                  width={10}
                  height={10}
                  alt="image"
                  id="preview"
                  src={imageUrl}
                  className="w-[10rem] object-contain"
                />
              </div>
            </div> */}
              <div className="flex flex-col w-full h-fit gap-2">
                <label htmlFor="content" className="text-lg">
                  Content
                </label>
                <div className="w-full h-[13rem] ">
                  <RichTextEditor onContentChange={handleContentChange} />
                </div>
              </div>
              {/* Links */}
              {/* <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="github" className="text-lg">
                Github Link
              </label>
              <input
                type="text"
                name="github"
                id="github"
                className="bg-neutral-100 py-2 rounded-lg px-2 outline-none "
              />
            </div>
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="youtube" className="text-lg">
                Youtube Link
              </label>
              <input
                type="text"
                name="youtube"
                id="youtube"
                className="bg-neutral-100 py-2 rounded-lg px-2 outline-none "
              />
            </div>
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="website" className="text-lg">
                Website Link
              </label>
              <input
                type="text"
                name="website"
                id="website"
                className="bg-neutral-100 py-2 rounded-lg px-2 outline-none "
              />
            </div> */}

              {/* Team Members */}
              {/* <div className="w-full flex flex-col mt-4 gap-4">
              <h2 className="">Team Members</h2>
              {teamMembers.map((member, index) => (
                <div key={index} className="flex gap-4 ">
                  <input
                    type="text"
                    placeholder="Name*"
                    value={member.name}
                    onChange={(e) => handleTeamChange(e, index, 'name')}
                    className="bg-neutral-100 py-2 rounded-lg px-2 outline-none"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Role*"
                    value={member.role}
                    onChange={(e) => handleTeamChange(e, index, 'role')}
                    className="bg-neutral-100 py-2 rounded-lg px-2 outline-none"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    value={member.email}
                    onChange={(e) => handleTeamChange(e, index, 'email')}
                    className="bg-neutral-100 py-2 rounded-lg px-2 outline-none"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveTeamMember(index)}
                    className="bg-red-400 text-white py-2 px-4 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={handleAddTeamMember}
                className="bg-gray-700 text-white py-2 px-4 rounded-lg"
              >
                Add Team Member
              </button>
            </div> */}

              <div className="w-full flex px-2 gap-4">
                <button
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-lg "
                  type="submit"
                >
                  Publish
                </button>
                <button
                  className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-lg"
                  onClick={handleResetClick}
                  type="button"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <div className="flex-[2] h-full ">
            <div className=" h-[40rem] border-2">
              <ProjectTable />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Project;
