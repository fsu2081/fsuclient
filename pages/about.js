import Image from "next/image"
import React from "react"
import { Poppins, Montserrat } from "next/font/google"
import Head from "next/head"
import { motion } from "framer-motion"

const poppins = Poppins({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})
const montserrat = Montserrat({
  weight: ["400", "200", "100", "300", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
})

const About = () => {
  const variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <>
      <Head>
        <title>About Us | FSU </title>
        <meta property="og:description" content="" />
        <meta property="og:type" content="article" />
      </Head>
      <section
        className={` ${montserrat.className} flex flex-col w-full h-fit text-center justify-around items-center py-9`}
        id="events">
        <div className=" text-center ">
          <motion.h3
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className={`font-bold text-[40px] ${montserrat.className} text-center text-[black]  mb-3 mx-auto`}>
            About FSU
          </motion.h3>
        </div>
        <div
          className={`xl:w-[70%] lg:w-[80%] w-[90%] md:p-6 p-1 text-xl ${poppins.className} text-left rounded-lg h-max `}>
          <div className="flex xl:flex-row flex-col-reverse gap-4 min-h-[24rem] xl:gap-7">
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-base text-justify xl:w-[70%] justify-between my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem]  font-bold w-[100%] mt-4 ">
                  History
                </motion.div>
                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-lg  mb-4 mt-2 ">
                  <span>
                    The history of FSU as an institution dates back to 1960. The
                    FSU is also known as the hub for potential leaders who can
                    lead the country in the future. There are many top-notch
                    politicians in the current Nepali political scenario who got
                    a rise from the FSU. The FSU elections will be held among
                    student leaders of the colleges affiliated with the TU. The
                    candidates are basically the representatives of the student
                    unions affiliated with major political parties. The voters
                    include the students who have officially enrolled at the
                    institution.
                  </span>
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="lg:w-[200%] max-w-[400px] max-h-[400px] mx-auto  w-full items-center my-auto">
              <Image
                src="/images/About Page/1.jpg"
                alt="FSU Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg border-2 "
                unoptimized
                priority
              />
            </motion.div>
          </div>
          <br />
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/6.jpg"
                alt="FSU Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem]  font-bold w-[100%]   ">
                  Committee Selection
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-lg  mt-2">
                  The election at each college elects a committee consisting of
                  the president, vice president, secretary, joint secretary,
                  treasurer and members. The number of members varies from
                  college to college.
                </motion.p>
              </div>
            </div>
          </div>

          <br />
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem]  font-bold w-[100%]   ">
                  Works
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-lg  mt-2">
                  The committee is established as the major student union in
                  Purwanchal campus after Free Students Union election held in
                  2079 B.S. It has been conducting various movements for rights
                  of student and educational system. It has been conducting
                  various programs in campus to motivate and encourage students
                  for better education.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/2.jpg"
                alt="FSU Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
          </div>
          <br />
          {/* <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[100%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem]  font-bold w-[100%]   ">
                  Committee Information
                </motion.div>

                <motion.table
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className=" text-base w-full md:text-md lg:text-lg text-left mt-2 font-light">
                  <tr className="border-2 border-black px-5">
                    <th className="px-5 border-r-2 border-black">SN</th>
                    <th className="px-5 border-r-2 border-black">
                      Organization
                    </th>
                    <th className="px-5 border-r-2 border-black">
                      Number of Members
                    </th>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="px-5 border-r-2 border-black">1.</td>
                    <td className="px-5 border-r-2 border-black">
                      Nepal Student&apos;s Union
                    </td>
                    <td className="px-5 border-r-2 border-black">10</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="px-5 border-r-2 border-black">2.</td>
                    <td className="px-5 border-r-2 border-black">
                      All Nepal National Free Students Union (UML)
                    </td>
                    <td className="px-5 border-r-2 border-black">3</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="px-5 border-r-2 border-black">3.</td>
                    <td className="px-5 border-r-2 border-black">
                      Nepal National Independent Students&apos; Union
                      (Revolutionary)
                    </td>
                    <td className="px-5 border-r-2 border-black">2</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="px-5 border-r-2 border-black">4.</td>
                    <td className="px-5 border-r-2 border-black">
                      Socialist Students Union
                    </td>
                    <td className="px-5 border-r-2 border-black">2</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="px-5 border-r-2 border-black">5.</td>
                    <td className="px-5 border-r-2 border-black">
                      Free Students&apos; Group
                    </td>
                    <td className="px-5 border-r-2 border-black">1</td>
                  </tr>
                </motion.table>
              </div>
              <div></div>
            </div> */}
          {/* </div> */}
          <div className="flex xl:flex-row flex-col-reverse gap-4  xl:gap-7">
            <div className=" w-[100%] xl:ml-auto xl:text-lg text-sm md:text-md mx-auto items-center text-justify mt-9">
              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-left text-[1.15rem] lg:text-[1.5rem]  font-bold w-[100%]  mt-4 ">
                Committee Information
              </motion.div>
              <motion.table
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-2 text-base md:text-md lg:text-lg">
                <thead>
                  <tr className="border-2 border-black px-5">
                    <th className="sm:px-5 px-3 border-r-2 border-black">SN</th>
                    <th className="sm:pl-5 pl-3 border-r-2 border-black">
                      Organization
                    </th>
                    <th className="sm:px-5 px-3 border-r-2 border-black">
                      Number of Members
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-2 border-black">
                    <td className="sm:px-5 px-3 border-r-2 border-black">1.</td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">
                      Nepal Student&apos;s Union
                    </td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">10</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="sm:px-5 px-3 border-r-2 border-black">2.</td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">
                      All Nepal National Free Students Union (UML)
                    </td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">3</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="sm:px-5 px-3 border-r-2 border-black">3.</td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">
                      Nepal National Independent Students&apos; Union
                      (Revolutionary)
                    </td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">2</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="sm:px-5 px-3 border-r-2 border-black">4.</td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">
                      Socialist Students Union
                    </td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">2</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="sm:px-5 px-3 border-r-2 border-black">5.</td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">
                      Free Students&apos; Group
                    </td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">1</td>
                  </tr>
                  <tr className="border-2 border-black">
                    <td className="sm:px-5 px-3 border-r-2 border-black">6.</td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">
                      Rashtriya Prajatantrik Students Union
                    </td>
                    <td className="sm:px-5 px-3 border-r-2 border-black">1</td>
                  </tr>
                </tbody>
              </motion.table>
            </div>
          </div>
          {/* <br />
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/5.jpg"
                alt="Delta Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start  ">
                  Annual Transformation
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-xl ${poppins.className} mt-2">
                  Every year, Delta undergoes a transformation, marked by a
                  change in nomenclature from Delta3.0 to Delta4.0. This
                  evolution signifies our commitment to progress and innovation.
                  Last year, under the theme of "Sustainable Modern
                  Agriculture," Delta3.0 hosted a grand National Technological
                  Event, setting the stage for an annual tradition of
                  exploration and advancement.
                </motion.p>
              </div>
            </div>
          </div>
          <br />
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start  ">
                  Events that Define Excellence
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-xl ${poppins.className} mt-2">
                  In our main events, we bring together all seven faculties for
                  competitions that challenge the boundaries of innovation and
                  creativity. From Software Hackathons to Popsicles Bridge
                  Competitions, each event is a testament to the diverse talents
                  within our organization. Our dedication to fostering
                  creativity extends to pre-events like Delta Champs, designed
                  to engage school and +2 level students in art, speech, quiz
                  contests, and more.
                </motion.p>
              </div>
            </div>
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/4.jpg"
                alt="Delta Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
          </div>
          <div className="flex xl:flex-row flex-col gap-4 min-h-[24rem] xl:gap-7">
            <motion.div
              variants={variants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="xl:w-[100%] max-w-[400px] max-h-[400px] items-center justify-center mx-auto my-auto">
              <Image
                src="/images/About Page/3.jpg"
                alt="Delta Photo"
                height={20}
                width={200}
                className="w-full object-cover rounded-lg"
                unoptimized
                priority
              />
            </motion.div>
            <div className="flex flex-col items-center xl:text-lg text-sm md:text-md text-justify xl:w-[70%] my-auto">
              <div>
                <motion.div
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="text-left text-[1.2rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start  ">
                  Training for Success
                </motion.div>

                <motion.p
                  variants={variants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="text-base md:text-md lg:text-xl ${poppins.className} mt-2">
                  Delta is not just an event organizer; it's a training ground.
                  We believe in nurturing talent by inviting experts to provide
                  specialized training to our students. This commitment extends
                  to pre-events, where participants are immersed in three days
                  of creative and technological activities.
                </motion.p>
              </div>
            </div>
          </div>

          <div className="flex xl:flex-row flex-col-reverse gap-4  xl:gap-7">
            <div className=" w-[100%] xl:ml-auto xl:text-lg text-sm md:text-md mx-auto items-center text-justify mt-9">
              <motion.div
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-left text-[1.15rem] lg:text-[1.5rem] ${poppins.className} font-extrabold w-[100%] text-start mt-4 ">
                Get Ready for the Ultimate Technical Adventure!
              </motion.div>
              <motion.p
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-2 text-base md:text-md lg:text-xl">
                Join us on our journey of growth, collaboration, and excellence.
                Delta is more than an organization; it's a community dedicated
                to shaping the future of engineering.
              </motion.p>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default About
