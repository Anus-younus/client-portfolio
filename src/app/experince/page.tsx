"use client"

function About() {
    return (
        <div data-theme="night" className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                
                {/* Image Section */}
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    className="w-full max-w-sm lg:max-w-xs rounded-lg shadow-2xl lg:mr-16 mb-8 lg:mb-0"
                    alt="Experience Image"
                />
                
                {/* Text Content */}
                <div className="w-full text-center lg:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        <span className="text-primary">Experiences</span>
                    </h1>
                    <p className="py-4 md:py-6 w-full lg:w-10/12 text-lg md:text-xl">
                        Provident cupiditate voluptatem et in. <span className="text-primary">Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque</span> aut repudiandae et a id nisi.
                    </p>
                    <p className="py-4 md:py-6 w-full lg:w-10/12 text-lg md:text-xl">
                        Provident cupiditate voluptatem et in. <span className="text-primary">Quaerat fugiat ut assumenda excepturi exercitationem quasi.</span> In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <p className="py-4 md:py-6 w-full lg:w-10/12 text-lg md:text-xl">
                        Provident cupiditate voluptatem et in. <span className="text-primary">Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut</span> repudiandae et a id nisi.
                    </p>
                    <p className="py-4 md:py-6 w-full lg:w-10/12 text-lg md:text-xl">
                        Provident cupiditate voluptatem et in. <span className="text-primary">Quaerat fugiat ut assumenda excepturi exercitationem quasi.</span> In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;
