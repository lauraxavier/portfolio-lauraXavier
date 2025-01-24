import Link from "next/link";

const NavLink = ({ href, title, onClick }) => {
    return (
        <Link
            href={href}
            className="block py-2 pl-3 pr-4 dark:text-[#ADB7BE] text-zinc-50 sm:text-xl rounded md:p-0 cursor-pointer relative group"
            onClick={onClick}
        >
            {title}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[rgba(128,90,213,0.8)] transition-all duration-300 group-hover:w-full"></span>
        </Link>
    );
};

export default NavLink;
