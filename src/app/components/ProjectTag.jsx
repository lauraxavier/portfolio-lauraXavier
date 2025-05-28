import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected
        ? "text-gray-900 dark:text-white border-primary-500"
        : "text-gray-600 dark:text-[#ADB7BE] border-slate-300 dark:border-slate-600 hover:border-primary-500";

    return (
        <button
            className={`
        ${buttonStyles} 
        rounded-full border-2 
        lg:px-5 lg:py-2 px-3 py-1 
        text-sm sm:text-base lg:text-xl 
        cursor-pointer transition-colors
      `}
            onClick={() => onClick(name)}
        >
            {name}
        </button>
    );
};

export default ProjectTag;
