import Image from "next/image";
import React, { useEffect, useState } from "react";

const SeeGallery = ({ gallery, flag, setFlag }) => {
  const [galleryImages, setGalleryImages] = useState([]);


  useEffect(() => {
    const getGalleryImages = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/gallery/images/${gallery._id}`
        );
        const { data } = await response.json();
        setGalleryImages(data);
      } catch (error) {
        console.error("Error fetching gallery images for editing:", error);
      }
    };
    getGalleryImages();
  }, [flag]);

  

  //   delete image by id
  const handleDeleteConfirmation = (id) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this image?"
    );

    if (userConfirmed) {
      handleDelete(id);
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    try {
      await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/gallery/images/${id}`,
        {
          method: "DELETE",
        }
      );
      setFlag(flag + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddImageSubmit = async () => {
    const images = document.getElementById("images");
    const formData = new FormData();

    for (let i = 0; i < images.files.length; i++) {
      formData.append("images", images.files[i]);
    }
    formData.append("gallery_id", gallery._id);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/admin/gallery/images`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.status === "success") {
        setFlag(flag + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white rounded-lg flex flex-col gap-2 ">
      <h4 className="text-center font-semibold">{gallery?.title}</h4>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-4 gap-4 ">
          {galleryImages?.map((image, id) => (
            <div key={image._id} className="flex flex-col gap-2">
              <Image
                src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${image.image_url}`}
                width={80}
                height={80}
                alt="image"
              />
              <button
                onClick={() => {
                  handleDeleteConfirmation(image._id);
                }}
                className="text-center p-2 border rounded-md hover:bg-red-400 hover:text-white duration-200 "
              >
                Delete
              </button>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-4 ">
            <h5 className="font-semibold">Add Images: </h5>
            <input type="file" id="images" name="images" multiple />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleAddImageSubmit}
              className="py-2 px-6 bg-blue-400 hover:bg-blue-400/80 duration-200 text-white rounded-md "
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeGallery;
