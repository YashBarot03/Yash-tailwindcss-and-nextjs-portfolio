import React from "react"
import {
  AiOutlineGithub,
  AiOutlineTwitter,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineBehance,
  AiOutlineInstagram,
  AiOutlineLink,
  AiOutlineWhatsApp,
} from "react-icons/ai"

const Footer = () => {
  return (
    <footer className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
      <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
      <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between ">
        <div className="flex flex-row items-center justify-center space-x-1 text-black-500 dark:text-neutral-100  pb-4">
          © 2023 Yash Barot <a href="/" className="hover:underline"></a>
        </div>
        <div className="flex flex-row items-center justify-center space-x-2 mb-1  pb-4" >
          <a href="https://github.com/YashBarot03" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100 hover:text-cyan-500 dark:hover:text-cyan-500"
              size={30}
            />
          </a>
        
          <a
            href="https://www.linkedin.com/in/yash-barot-a39864214/"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100  hover:text-cyan-500 dark:hover:text-cyan-500"
              size={30}
            />
          </a>
      
          <a
            href="https://drive.google.com/file/d/1En2Rm0kNcBVQTZWzjg29sw7cI6X78xzy/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineLink
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100  hover:text-cyan-500 dark:hover:text-cyan-500"
              size={30}
            />
          </a>
          
          {/* <a
            href="https://www.behance.net/abhishek2003"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineBehance
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100  hover:text-cyan-500 dark:hover:text-cyan-500"
              size={30}
            />
          </a> */}
          <a
            href="https://wa.me/919321004179"
            rel="noreferrer"
            target="_blank"
          >
            <AiOutlineWhatsApp
              className="hover:-translate-y-1 transition-transform cursor-pointer text-black-500 dark:text-neutral-100  hover:text-cyan-500 dark:hover:text-cyan-500"
              size={30}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
