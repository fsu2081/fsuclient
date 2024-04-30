import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Poppins, Montserrat } from "next/font/google";
import Image from "next/image";

const poppins = Poppins({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});
const montserrat = Montserrat({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const GalleryTable = () => {
  const [galleries, setGalleries] = useState();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState();

  const [editMode, setEditMode] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedGalleryImages, setSelectedGalleryImages] = useState([]);

  const getGalleryImages = async (galleryId) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/gallery/${galleryId}`
      );
      const data = await response.json();
      console.log(data);

      setSelectedGalleryImages(data.images);
    } catch (error) {
      console.error("Error fetching gallery images for editing:", error);
    }
  };

  const getGalleries = async () => {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/gallery`
      ).then((r) => {
        return r.json();
      });
      setGalleries(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getGalleries();
  }, []);

  const handleDeleteGallery = async (id) => {
    console.log("hello");
    console.log(id);
    const result = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/gallery/deletegallery/${id}`
    ).then((r) => {
      return r.json();
    });
    // const result = await fetch(
    //   `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/gallery/deletegallery`,
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       id: id,
    //     }),
    //     credentials: "include",
    //   }
    // ).then((r) => {
    //   return r.json();
    // });
    if (result.status === "success") {
      router.reload();
    }
  };

  const handleSeeGallery = (galleryId) => {
    getGalleryImages(galleryId);
    setSelectedGallery(galleryId);
    getGalleryImages(galleryId);
    setEditMode(true);
  };

  const handleSubmit = async (id) => {
    const files = document.getElementById("files");
    if (!files.files[0]) {
      setMessage("No image selected!!!");
      return;
    }

    try {
      const formData = new FormData();

      for (let i = 0; i < files.files.length; i++) {
        formData.append("files", files.files[i]);
      }

      // Update existing gallery
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/gallery/${id}`,
        {
          method: "POST",
          body: formData,
        }
      ).then((r) => r.json());
      console.log(response);
      if (response.status === "success") {
        setMessage("Gallery updated successfully!");
      } else {
        setMessage("Failed to update gallery.");
      }
    } catch (error) {
      console.error("Error uploading gallery:", error);
      setMessage("An error occurred. Please try again.");
    } finally {
      files.value = null;
      setSelectedGallery(null);
      setSelectedGalleryImages([]);
    }
  };

  return (
    <div
      className={`max-h-[30rem] md:w-[60%] w-[95%] border-2 overflow-auto border-gray-300 mb-4 rounded-lg ${poppins.className} bg-white `}
    >
      {editMode && (
        <div
          onClick={() => setEditMode(false)}
          className="absolute top-0 left-0 flex justify-center items-center w-screen min-h-screen h-max bg-[#00000059] z-[100]"
        >
          <div className="w-full flex flex-col justify-center items-center mb-5 ">
            <h2 className="text-[2rem] text-white font-semibold ">
              Current Images
            </h2>
            <div className="flex flex-wrap gap-2 w-[90%] ">
              {selectedGalleryImages.map((image, id) => (
                <Image
                  key={id}
                  src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${image}`}
                  alt={image}
                  width={10}
                  height={10}
                  className="w-[10rem] h-[12rem] object-cover "
                  unoptimized
                  priority
                />
              ))}
            </div>
          </div>
        </div>
      )}

      <div
        className={`w-full flex justify-center items-center font-bold md:text-[2rem] text-lg text-[#BB002D] py-4 ${montserrat.className}`}
      >
        Uploaded Galleries
      </div>
      {message && (
        <div className="w-full flex justify-center ">
          <p className="text-red-500">{message}</p>
        </div>
      )}
      <table className="md:w-[90%] w-[100%] text-center mx-auto mb-4 ">
        <thead>
          <tr className="font-bold border-t-2 border-b-2 md:text-lg text-sm">
            <td>Sn</td>
            <td>Name</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="7">Loading...</td>
            </tr>
          ) : (
            <>
              {galleries && galleries.length > 0 ? (
                galleries.map((gallery, id) => (
                  <tr key={id} className="md:text-base text-sm ">
                    <td>{id + 1}</td>
                    <td>{gallery.event}</td>
                    <td>
                      <div className="w-full flex items-center justify-center mt-1 gap-2 ">
                        <div
                          onClick={() => handleSeeGallery(gallery._id)}
                          className=" text-sm duration-300 hover:bg-[#BB002D] hover:text-white border-2 border-[#BB002D] md:px-3 px-1 py-1 rounded-md cursor-pointer "
                        >
                          See
                        </div>
                        <div
                          onClick={() => handleDeleteGallery(gallery._id)}
                          className=" text-sm duration-300 hover:bg-[#BB002D] hover:text-white border-2 border-[#BB002D] md:px-3 px-1 py-1 rounded-md cursor-pointer "
                        >
                          Delete
                        </div>
                        {/* <div
                          onClick={handleSubmit}
                          className=" text-sm duration-300 bg-sky-500 hover:text-white md:px-3 px-1 py-1 rounded-md cursor-pointer "
                        >
                          Submit
                        </div> */}
                        <form
                          encType="multipart/form-data"
                          onSubmit={(e) => {
                            e.preventDefault();
                            handleSubmit(gallery._id);
                          }}
                          className="flex items-center gap-2 "
                        >
                          <div className="w-[100%] text-center">
                            <label
                              htmlFor="files"
                              className="text-sm duration-300 hover:bg-[#BB002D] hover:text-white border-2 border-[#BB002D] md:px-3 px-1 py-1 rounded-md cursor-pointer"
                            >
                              Add
                            </label>
                            <input
                              className=" w-[100%] hidden"
                              id="files"
                              type="file"
                              name="files"
                              multiple
                              accept=".png, .jpg, .jpeg"
                              //   required
                            />
                          </div>
                          <button
                            type="submit"
                            className=" text-sm duration-300 bg-sky-500 hover:text-white md:px-3 px-1 py-1 rounded-md cursor-pointer "
                          >
                            Submit
                          </button>
                        </form>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7">No data to show</td>
                </tr>
              )}
            </>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GalleryTable;
