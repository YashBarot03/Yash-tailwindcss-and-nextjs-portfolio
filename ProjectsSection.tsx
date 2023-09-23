import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Expense Tracker Using Python",
    description:
      "The project's goal is to create a Python-based GUI application that uses Tkinter module to track spending.",
    image: "/proj1.png",
    github: "https://github.com/YashBarot03/Expense-Tracker-python-GUI",
    link: "https://drive.google.com/file/d/1xsKzdRCK-Nstd96GR-DkWdXEYNky2t_-/view?usp=sharing",
  },
  {
    name: "Design and Development of Smart Saline Assistance System",
    description:  "In order to automate saline administration to reduce the caregiver’s workload and overcome all the issues faced by the existing system our project was developed.",
    image: "/proj2.png",
    github: "",
    link: "https://drive.google.com/file/d/1j5IjbQumFK6LUSXx2Sd5lyQ29wpu7B4V/view?usp=sharing",
    
  },
  {
    name: "Airport Management System ",
    description:
      "In this Project firstly we created a database and feed all the necessary records and then basic SQL queries were performed using different tables.",
    image: "/proj3.png",
    github: "",
    link: "https://drive.google.com/file/d/1EczcfvsVCPnFKfNanSZXabVuLu4sxE-v/view?usp=sharing",
  },
  {
    name: "Dual Axis Solar tracker",
    description:
      "A dual-axis solar tracker that was able to harness energy along both axes and was able to track more than 40% of light incidents on it as compared to fixed and single-axis trackers.",
    image: "/proj4.png",
    github: "",
    link:"https://drive.google.com/file/d/1vXyITwc25aCb0vcQN1nguIUHrZ-s9bZ7/view?usp=sharing",
  },
  // {
  //   name: "Candy Crush Clone in Flutter",
  //   description:
  //     "The Candy Crush Flutter project was an exciting part of my Mobile App Development Lab in Flutter. While the application is already functional, there are still many things that I plan to update and improve upon.",
  //   image: "/proj5.png",
  //   github: "https://github.com/abhishekjani08/Candy-crush-Flutter",
  //   link: "https://www.linkedin.com/posts/abhishek-jani-9059011a9_android-flutter-androiddev-activity-7067101062389710848-oleA?utm_source=share&utm_medium=member_desktop",
  // },
  // {
  //   name: "REMOTE CONTROLLED GRASS CUTTING ROBOT",
  //   description:
  //     "This robot can be operated using android phone. This system can be created with minimum cost as compared to other existing systems. This is rugged, durable and maintenance free.",
  //   image: "/proj6.png",
  //   github: "https://github.com/abhishekjani08/REMOTE-CONTROLLED-GRASS-CUTTING-ROBOT",
  //   link: "https://drive.google.com/file/d/1WCCiDeKETXXuUdmuvV3SDNr5pm5zsWE6/view",
  // },
]

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        My Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-l leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
