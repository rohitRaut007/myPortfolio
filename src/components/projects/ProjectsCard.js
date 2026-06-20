import React from 'react'
import { BsGithub } from "react-icons/bs";

const ProjectsCard = ({ title, des, src, video, link }) => {
  return (
    <div
      className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg flex flex-col transition-all duration-300 group"
      style={{
        background: "var(--c-bg-card)",
        border: "1px solid var(--c-border)",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "var(--c-border-s)";
        e.currentTarget.style.transform = "translateY(-3px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "var(--c-border)";
        e.currentTarget.style.transform = "none";
      }}
    >
      <div className="w-full h-[80%] overflow-hidden rounded-lg">
        {video ? (
          <video
            className="w-full h-48 object-cover group-hover:scale-105 duration-300 cursor-pointer rounded-lg"
            src={video}
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            className="w-full h-48 object-cover group-hover:scale-105 duration-300 cursor-pointer rounded-lg"
            src={src}
            alt={title}
          />
        )}
      </div>
      <div className="w-full mt-5 flex flex-col gap-4">
        <div>
          <div className="flex items-center justify-between">
            <h3
              className="text-base uppercase font-semibold tracking-wide"
              style={{ color: "var(--c-accent)" }}
            >
              {title}
            </h3>
            <span
              className="text-lg w-9 h-9 rounded-full inline-flex justify-center items-center cursor-pointer transition-colors duration-300"
              style={{
                background: "var(--c-bg-card-2)",
                border: "1px solid var(--c-border)",
                color: "var(--c-text-3)",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--c-accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--c-text-3)"; }}
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <BsGithub />
              </a>
            </span>
          </div>
          <p
            className="text-sm tracking-wide mt-3 leading-6"
            style={{ color: "var(--c-text-3)" }}
          >
            {des}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProjectsCard
