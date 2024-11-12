import React from "react";
import {} from "../assets/bg.png";

export const Hero = () => {
    return (
        <section className="bg-[url('./assets/bg.png')] py-[250px] bg-cover">
            <div className="container">
                <div className="hero__block">
                    <div className="about_block flex items-center gap-[15px] justify-center mb-[45px]">
                        <a
                            className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500"
                            href="#"
                        >
                            Discover
                        </a>
                        <a
                            className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500"
                            href="#"
                        >
                            Animation
                        </a>
                        <a
                            className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500"
                            href="#"
                        >
                            Branding
                        </a>
                        <a
                            className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500"
                            href="#"
                        >
                            Illustration
                        </a>
                        <a
                            className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500"
                            href="#"
                        >
                            Mobile
                        </a>
                        <a
                            className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500"
                            href="#"
                        >
                            Print
                        </a>
                        <a
                            className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500"
                            href="#"
                        >
                            Product Design
                        </a>
                        <a
                            className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500"
                            href="#"
                        >
                            Typography
                        </a>
                        <a
                            className="text-[16px] font-normal leading-[125%] text-white rounded-[50px] py-[16px] px-[21px] bg-slate-500"
                            href="#"
                        >
                            Web Design
                        </a>
                    </div>

                    <div className="title_block mb-[41px]">
                        <h1 className="text-[32px] font-bold leading-[125%] text-white mb-[16px] text-center w-[411px] ml-auto mr-auto">
                            Explore the world’s leading design portfolios
                        </h1>
                        <p className="text-[16px] font-normal leading-[175%] text-white text-center w-[611px] ml-auto mr-auto">
                            Millions of designers and agencies around the world
                            showcase their portfolio work on Dribbble - the home
                            to the world’s best design and creative
                            professionals.
                        </p>
                    </div>

                    <div className="inp_block">
                        <form
                            className="ml-auto mr-auto w-[650px]"
                            method="post"
                        >
                            <input
                                className="w-[600px] bg-white rounded-[50px] py-[20px] px-[50px] text-[14px] font-medium text-[#9e9ea7] "
                                type="text"
                                placeholder="search..."
                                name="search"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
