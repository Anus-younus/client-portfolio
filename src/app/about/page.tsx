"use client"

export default function About() {
    return (
        <>
            {/* About Section */}
            <div data-theme="night" className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                        className="max-w-sm lg:max-w-xs w-full rounded-lg shadow-2xl mb-8 lg:mb-0 lg:mr-16"
                    />
                    <div className="w-full text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-bold">Know Who <span className="text-primary">I&apos;M</span></h1>
                        <p className="py-4 md:py-6 w-full lg:w-10/12 text-lg md:text-xl">
                            Provident cupiditate voluptatem <span className="text-primary italic">et in. Quaerat fugiat ut assumenda excepturi exercitationem</span> quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <p className="mt-8 md:mt-12 text-lg md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. In, suscipit!</p>
                        <p className="mt-3 text-lg md:text-xl">Hello World</p>
                        <p className="text-lg md:text-xl mt-1">Hello Mars</p>
                        <p className="text-lg md:text-xl mt-1">Hello Moon</p>
                    </div>
                </div>
            </div>
        </>
    )
}
