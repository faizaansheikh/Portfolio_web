import React, { useState } from "react";
import { MainBtn, MainColor, MainLightColor } from "../utils";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiAntdesign } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io5";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { PiFileSqlBold } from "react-icons/pi";
import { FaPiedPiperSquare } from "react-icons/fa";
import { SiAuthy } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io";
import { SiMui } from "react-icons/si";
import { SiCss3 } from "react-icons/si";

import { FaGithub } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { FaAws } from "react-icons/fa";
import { FaDocker } from "react-icons/fa";

import { IoGitBranchOutline } from "react-icons/io5";
function Skills() {
    // Define skills by category
    const skillTabs = {
        frontend: [
            { label: "HTML 5", icon: (size, color) => <IoLogoHtml5 size={size} color={color} /> },
            { label: "CSS 3", icon: (size, color) => <SiCss3 size={size} color={color} /> },
            { label: "Javascript", icon: (size, color) => <IoLogoJavascript size={size} color={color} /> },
            { label: "Typescript", icon: (size, color) => <BiLogoTypescript size={size} color={color} /> },
            { label: "React.js", icon: (size, color) => <FaReact size={size} color={color} /> },
            { label: "Next.js", icon: (size, color) => <SiNextdotjs size={size} color={color} /> },
            { label: "Tailwind CSS", icon: (size, color) => <RiTailwindCssFill size={size} color={color} /> },
            { label: "Material UI", icon: (size, color) => <SiMui size={size} color={color} /> },
            { label: "Shadcn/UI", icon: (size, color) => <SiShadcnui size={size} color={color} /> },
            { label: "Framer Motion", icon: (size, color) => <TbBrandFramerMotion size={size} color={color} /> },
            { label: "Ant Design", icon: (size, color) => <SiAntdesign size={size} color={color} /> },


        ],
        backend: [
            { label: "Node.js", icon: (size, color) => <IoLogoNodejs size={size} color={color} /> },
            { label: "Express.js", icon: (size, color) => <SiExpress size={size} color={color} /> },
            { label: "Next.js API Routes", icon: (size, color) => <SiNextdotjs size={size} color={color} /> },
            { label: "MongoDB", icon: (size, color) => <SiMongodb size={size} color={color} /> },
            { label: "SQL", icon: (size, color) => <PiFileSqlBold size={size} color={color} /> },
            { label: "PostgreSql", icon: (size, color) => <BiLogoPostgresql size={size} color={color} /> },
            { label: "REST APIs", icon: (size, color) => <FaPiedPiperSquare size={size} color={color} /> },
            { label: "Authentication (JWT, OAuth)", icon: (size, color) => <SiAuthy size={size} color={color} /> },

        ],
        'Other Skills': [
            { label: "Git", icon: (size, color) => <FaGithub size={size} color={color} /> },
            { label: "Github Actions", icon: (size, color) => <FaSquareGithub size={size} color={color} /> },
            { label: "AWS", icon: (size, color) => <FaAws size={size} color={color} /> },
            { label: "Docker", icon: (size, color) => <FaDocker size={size} color={color} /> },
            { label: "CI/CD", icon: (size, color) => <IoGitBranchOutline size={size} color={color} /> },


        ],
    };

    const [activeTab, setActiveTab] = useState("frontend");

    return (
        <div
            style={{ backgroundColor: MainLightColor }}
            className="w-full h-auto flex flex-col items-center pb-16"
        >
            {/* Heading */}
            <div className='flex flex-col  px-12 pt-13  md:pt-18'>
                <p style={{ color: MainBtn }} className='text-center text-4xl font-bold py-2'>Skills & Technologies</p>
                <p className='text-center  md:text-lg py-2'> My technical toolkit for building exceptional digital experiences 🛠️ </p>
            </div>
           

            {/* Tabs */}
            <div className="flex gap-6 mt-8">
                {Object.keys(skillTabs).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        style={{
                            borderBottom:
                                activeTab === tab ? `3px solid ${MainBtn}` : "3px solid transparent",
                            color: activeTab === tab ? MainBtn : "#888",
                        }}
                        className="text-lg font-semibold px-4 pb-2 transition-colors"
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </button>
                ))}
            </div>

            {/* Skills List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10 w-[90%] sm:w-[70%] border-1 border-[#44444E] p-8 rounded-[8px]">
                {skillTabs[activeTab].map((skill, i) => (
                    <div
                        key={i}
                        className="flex items-center flex-col justify-center bg-[#080711] text-white text-center py-3 rounded-lg shadow-md border border-[#44444E] hover:border-[#744ebaff] transition-transform transition-all duration-500 "
                    >
                        <span className="m-4">  {skill.icon(30, MainBtn)}</span>
                        {skill.label}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
