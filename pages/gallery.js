import React, { useEffect, useState } from "react"
import { gallery } from "../data/data"
import Image from "next/image"
import Link from "next/link"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { Poppins, Montserrat } from "next/font/google"
import Head from "next/head"

const poppins = Poppins({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
const montserrat = Montserrat({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const Gallery = () => {
  const [loading, setLoading] = useState(true)
  const [gallery, setGallery] = useState()
  const loader = [1, 2, 3, 4, 5]

  const getGallery = async () => {
    try {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/gallery`
      ).then((r) => {
        return r.json()
      })
      setGallery(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getGallery()
  })

  return (
    <>
      <Head>
        <title>Gallery | Free Student Union </title>
      </Head>
      <section
        className="flex flex-col w-[100%] min-h-[49rem] h-max text-center items-center md:px-5 px-3 mb-16 "
        id="events">
        <div className=" text-center">
          <h3
            className={`font-bold text-[36px] ${montserrat.className}  text-center text-[black] mb-8 mx-auto mt-5`}>
            Some Glimpses
          </h3>
        </div>
        <div className="lg:w-[80%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-9 justify-items-center ">
          {loading ? (
            loader.map((item, i) => (
              <div key={i} className="rounded w-[90%] mx-auto">
                <Skeleton className="h-[14rem] mb-4" />
                <Skeleton className="h-[1.8rem]" width={"80%"} />
              </div>
            ))
          ) : (
            <>
              {gallery &&
                gallery.map((item, i) => {
                  return (
                    <div key={i} className="rounded w-[90%] h-max">
                      <div className="group relative flex flex-col border-gray-300 w-[100%] h-[20rem] duration-500  overflow-hidden rounded-xl shadow-xl">
                        <Link
                          href={`/gallery/${item._id}`}
                          className="w-full h-full ">
                          <div className="w-full h-full ">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/${item.images[0]}`}
                              height={20}
                              width={20}
                              alt="Gallery"
                              className="w-full h-full object-cover border-2 rounded-lg "
                              unoptimized
                              priority
                            />
                          </div>
                        </Link>
                      </div>
                      <Link
                        href={`/gallery/${item._id}`}
                        className={`text-2xl hover:text-[#B7002B] cursor-pointer font-semibold uppercase ${montserrat.className} rounded mt-2 `}>
                        {item.event}
                      </Link>
                    </div>
                  )
                })}
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Gallery
