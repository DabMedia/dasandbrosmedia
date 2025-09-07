import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineRight } from "react-icons/ai";
import BreadcrumbImg from "../assets/contactus.webp";

const Breadcrumb = ({ title }) => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter((x) => x);

    // If no title is passed, take the last path as heading
    const pageTitle =
        title || (paths.length > 0 ? paths[paths.length - 1] : "Home");

    return (
        <section
            className="relative bg-cover bg-center py-16"
            style={{
                backgroundImage: `url(${BreadcrumbImg})`,
            }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-60"></div>

            <div className="relative z-10 container mx-auto text-center text-white">
                <h1 className="text-4xl font-bold mb-10 capitalize">{pageTitle}</h1>

                <nav className="flex justify-center text-sm" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-2">
                        <li>
                            <Link to="/" className="hover:text-blue-400 transition">
                                Home
                            </Link>
                        </li>

                        {paths.map((name, index) => {
                            const routeTo = "/" + paths.slice(0, index + 1).join("/");
                            const isLast = index === paths.length - 1;

                            return (
                                <li key={routeTo} className="flex items-center space-x-2">
                                    <span className="text-purple-400 text-[12px]">
                                        <AiOutlineRight />
                                    </span>
                                    {isLast ? (
                                        <span className="uppercase">{name}</span>
                                    ) : (
                                        <Link
                                            to={routeTo}
                                            className="text-[15px] font-bold hover:text-blue-400 uppercase"
                                        >
                                            {name}
                                        </Link>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </section>
    );
};

export default Breadcrumb;
