"use client"
import { useTypewriter } from 'react-simple-typewriter'
import { FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function App() {
  const [text] = useTypewriter({
    words: ['Hello World', 'Welcome to React', 'Enjoy coding!'],
    loop: true, 
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <>
      {/* Hero Section */}
      <div data-theme="night" className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse justify-between w-full">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm lg:max-w-xs w-full rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-16" 
          />
          <div className="text-center lg:text-left lg:ml-14">
            <h1 className="text-4xl md:text-5xl font-bold">Hi There</h1>
            <h1 className="text-4xl md:text-5xl mt-6 font-bold">I&apos;M <span>Muhammad Muneeb</span></h1>
            <h1 className="text-3xl md:text-5xl mt-6 text-primary font-bold">{text} <span className="text-cyan-50">|</span></h1>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <div data-theme="night" className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm lg:max-w-xs w-full rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-16" 
          />
          <div className="text-center lg:text-left lg:ml-14">
            <h1 className="text-4xl md:text-5xl font-bold">
              LET ME <span className="text-primary">INTRODUCE</span> MYSELF!
            </h1>
            <p className="py-4 md:py-6 w-full lg:w-10/12 text-lg">
              Provident cupiditate voluptatem et in <span className="text-primary italic">Quaerat fugiat ut assumenda excepturi</span> exercitationem quasi.
            </p>
            <p className="py-4 md:py-6 w-full lg:w-10/12 text-lg">
              Provident cupiditate voluptatem et in <span className="text-primary italic">Quaerat fugiat ut assumenda excepturi</span> exercitationem quasi.
            </p>
            <p className="py-4 md:py-6 w-full lg:w-10/12 text-lg">
              Provident cupiditate voluptatem et in <span className="text-primary italic">Quaerat fugiat ut assumenda excepturi</span> exercitationem quasi.
            </p>
            <p className="py-4 md:py-6 w-full lg:w-10/12 text-lg">
              Quaerat fugiat ut <span className="text-primary italic">assumenda excepturi exercitationem quasi</span> repudiandae.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      {/* Find Me Section */}
      <div data-theme="night" className="hero bg-base-200 h-96">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-4xl md:text-5xl font-bold mb-10">FIND ME ON</h1>
            <div className="flex justify-center gap-4 md:gap-9">
              <button className="btn btn-primary text-xl"><FaLinkedin /></button>
              <button className="btn btn-primary text-xl"><FaFacebook /></button>
              <button className="btn btn-primary text-xl"><FaSquareInstagram /></button>
              <button className="btn btn-primary text-xl"><IoMdMail /></button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
