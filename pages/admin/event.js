import NoticeBoard from '@/components/Admin/NoticeBoard';
// import RichTextEditor from '@/components/RichTextEditor';
import { DateRange } from '@mui/icons-material';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const RichTextEditor = dynamic(() => import('@/components/RichTextEditor'), {
  ssr: false, // This ensures the component is only rendered on the client side
});

const AdminEvent = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    console.log(content);
  }, [content]);

  // How to destructure date

  // useEffect(() => {
  //   const dated = document.getElementById('date');
  //   console.log(dated.value);
  //   let date = new Date(dated.value);
  //   let year = date.getFullYear();
  //   console.log(year);
  //   let month = date.getMonth() + 1;
  //   console.log(month);
  //   let day = date.getDate();
  //   console.log(day);
  // }, [selectedDate]);

  const handleAddImage = (e) => {
    const fileInput = document.getElementById('image');
    const file = fileInput.files[0];
    if (file) {
      let reader = new FileReader();
      const blob = new Blob([file], { type: file.type });

      reader.readAsDataURL(blob);
      reader.onload = function (event) {
        document.getElementById('preview').src = event.target.result;
        setImageUrl(event.target.result);
      };
    } else {
      // setImageUrl('');
    }
  };

  const handleResetClick = () => {
    const titleInput = document.getElementById('title');
    if (titleInput) {
      titleInput.value = '';
    }
    const contentInput = document.getElementById('content');
    if (contentInput) {
      contentInput.value = '';
    }
    const registrationInput = document.getElementById('registration');
    if (registrationInput) {
      registrationInput.value = '';
    }
    const facebookInput = document.getElementById('facebook');
    if (facebookInput) {
      facebookInput.value = '';
    }

    const imageInput = document.getElementById('image');
    if (imageInput) {
      imageInput.value = '';
    }
    const dateInput = document.getElementById('date');
    if (dateInput) {
      dateInput.value = '';
    }
    setSelectedDate('');

    const previewImage = document.getElementById('preview');
    if (previewImage) {
      previewImage.src = '';
    }

    setImageUrl('');
  };

  const handlePublishClick = async (e) => {
    e.preventDefault();
    const title = document.getElementById('title');
    const image = document.getElementById('image');
    const date = document.getElementById('date');
    // const content = document.getElementById('content');
    const registration = document.getElementById('registration');
    const facebook = document.getElementById('facebook');
    try {
      //creating formData
      const formData = new FormData();
      formData.append('title', title.value);
      formData.append('image', image.files[0]);
      formData.append('date', date.value);
      formData.append('content', content);
      formData.append('registration', registration.value);
      formData.append('facebook', facebook.value);
      console.log(formData);

      //send data to server
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/event`,
        {
          method: 'POST',
          body: formData,
        }
      );
      if (response.status === 201) {
        handleResetClick();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleContentChange = (newContent) => {
    setContent(newContent);
  };

  return (
    <div className="w-full h-fit min-h-[calc(100vh-4rem)] flex flex-col bg-neutral-200 px-8 ">
      <div className=" mt-6">
        <h1 className="text-4xl">Event</h1>
      </div>
      {/* Event Box */}
      <div className="w-full h-fit border-2 flex mt-4 gap-8">
        <div className="flex-1 h-fit bg-white rounded-lg p-2 px-8 py-8 ">
          <div className="text-2xl font-semibold ">
            <span>Create an Event</span>
          </div>
          {/* Event form */}
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

            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="image">Poster</label>
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
            </div>

            {/* input for Date */}
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="date" className="text-lg">
                Event Date
              </label>
              <div className="w-fit relative bg-neutral-100 py-2 rounded-lg px-2 outline-none">
                <label
                  htmlFor="date"
                  className="absolute right-4 top-0 h-full flex items-center z-[10]"
                >
                  <DateRange />
                </label>
                <DatePicker
                  name="date"
                  id="date"
                  type="text"
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  className="w-full bg-neutral-100 outline-none"
                  showYearDropdown
                  showMonthDropdown
                  autoComplete="off"
                  onKeyDown={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
            </div>

            {/* <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="location" className="text-lg">
                Location
              </label>
              <input
                type="text"
                name="location"
                id="location"
                className="bg-neutral-100 py-2 rounded-lg px-2 outline-none"
              />
            </div> */}
            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="registration" className="text-lg">
                Registration Link
              </label>
              <input
                type="text"
                name="registration"
                id="registration"
                className="bg-neutral-100 py-2 rounded-lg px-2 outline-none "
              />
            </div>

            <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="facebook" className="text-lg">
                Facebook Post Link
              </label>
              <input
                type="text"
                name="facebook"
                id="facebook"
                className="bg-neutral-100 py-2 rounded-lg px-2 outline-none "
              />
            </div>

            {/* <div className="flex flex-col w-full gap-2 ">
              <label htmlFor="content" className="text-lg">
                Content
              </label>
              <textarea
                type="text"
                name="content"
                id="content"
                className="bg-neutral-100 py-2 rounded-lg px-2 outline-none"
              />
            </div> */}
            <div className="flex flex-col w-full h-fit gap-2">
              <label htmlFor="content" className="text-lg">
                Content
              </label>
              <div className="w-full h-[13rem] ">
                <RichTextEditor onContentChange={handleContentChange} />
              </div>
            </div>

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

        {/* <div className="flex-[2] h-full ">
          <NoticeBoard />
        </div> */}
      </div>
    </div>
  );
};

export default AdminEvent;
