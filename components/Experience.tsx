import React from "react"

const Experience = () => {
    return (
        <div>
            <section id="experiencesss">
                <h1 style={{ marginTop: '6rem'}} className="text-center font-bold text-4xl">
                    Experiences & Certifications
                    <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
                </h1>
                <ol className="relative border-l border-gray-200 dark:border-gray-700" style={{ marginTop: '4rem'}}>

                    {/* 1 */}
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-600">
                            <svg aria-hidden="true" className="w-3 h-3 text-cyan-500 dark:text-cyan-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Crash Course on Python By Google<span className="bg-cyan-100 text-cyan-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-cyan-600 dark:text-cyan-300 ml-3">Latest</span></h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2023</time>
                        {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> */}
                        <a href="https://drive.google.com/file/d/1P1B42TzB0GhuMgaBcf1f270P7-OU0jjk/view?usp=sharing" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-cyan-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Show Credential </a>
                    </li>
                    
                     {/* 2 */}
                     <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-cyan-800 dark:text-cyan-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Data Science Training</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2022 </time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Learned the basics of Data Science , AI/ML Models.</p>
                        <a href="https://drive.google.com/file/d/1WijoCynZ9AfK7tJ4AOUgQrc2L2NpMFNv/view?usp=sharing" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-cyan-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Show Certificate </a>
                    </li>

                    {/* 3 */}
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-600">
                            <svg aria-hidden="true" className="w-3 h-3 text-cyan-500 dark:text-cyan-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                            Infosys Springboard Python Programmer Certification</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2022</time>
                        {/* <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p> */}
                        <a href="https://drive.google.com/file/d/1ZHcq3hWQn7DplL0CNda-Nq8HMeYH6FGQ/view?usp=sharing" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-cyan-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Show Credential </a>
                    </li>

                    {/* 4 */}
                    <li className="mb-10 ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-cyan-800 dark:text-cyan-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Infosys Springboard Scrum In Practice</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Jan 2022</time>
                        {/* <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p> */}
                        <a href="https://drive.google.com/file/d/14VHSCrEQA-R8pYuoQW994ZyOldlw9AsO/view?usp=sharing" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-cyan-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Show Credential </a>
                    </li>

                    

                    {/* 5 */}
                    <li className="ml-6">
                        <span className="absolute flex items-center justify-center w-6 h-6 bg-cyan-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-cyan-900">
                            <svg aria-hidden="true" className="w-3 h-3 text-cyan-800 dark:text-cyan-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                        </span>
                        <h3 className="mb-1 text-lg font-semibold text-gray-900 dark:text-white">Intern at Woobblr Inc</h3>
                        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2021</time>
                        <p className="text-base font-normal text-gray-500 dark:text-gray-400">Enhanced my Marketing as well as  Web development skills through this Internship.</p>
                        <a href="https://drive.google.com/file/d/1lMlR2aVCxMLvLUTIG_NEz5kaAv1esoYA/view?usp=sharing" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-cyan-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-cyan-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Show Certificate </a>
                    </li>


 


                </ol>
            </section>

        </div>
    )
}
export default Experience;