"use client"

import React from 'react'

export default function Projects() {
  return (
    <div data-theme="night" className="min-h-screen py-10">
      <div className="flex flex-wrap justify-center items-center gap-9 px-4">
        
        {/* Project Card 1 */}
        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl border border-primary mt-10">
          <figure className="p-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/nextjs-saylani-batch-11.appspot.com/o/client%20inages%2FUntitled_design-removebg-preview.png?alt=media&token=e3dee014-9631-4f50-8653-b32f83a85812"
              alt="Project Image"
              className="w-full h-auto object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Empty Field</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Demo</button>
              <button className="btn btn-primary">Github</button>
            </div>
          </div>
        </div>
        
        {/* Project Card 2 */}
        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl border border-primary mt-10">
          <figure className="p-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/nextjs-saylani-batch-11.appspot.com/o/client%20inages%2FUntitled_design-removebg-preview.png?alt=media&token=e3dee014-9631-4f50-8653-b32f83a85812"
              alt="Project Image"
              className="w-full h-auto object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Empty Field!</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Demo</button>
              <button className="btn btn-primary">Github</button>
            </div>
          </div>
        </div>
        
        {/* Project Card 3 */}
        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl border border-primary mt-10">
          <figure className="p-5">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/nextjs-saylani-batch-11.appspot.com/o/client%20inages%2FUntitled_design-removebg-preview.png?alt=media&token=e3dee014-9631-4f50-8653-b32f83a85812"
              alt="Project Image"
              className="w-full h-auto object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Empty Field!</h2>
            <p>If a dog chews shoes, whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Demo</button>
              <button className="btn btn-primary">Github</button>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  )
}
