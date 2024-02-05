import React from "react";
import profile from "../assets/images/profile.jpeg"
import Band from "./Band";

function HeroSection() {
    return (
        <>
            <div className="bg-[url('/src/assets/images/cover.png')] h-[600px] bg-cover bg-center overflow-hidden z-10 relative">
            </div>
            <div>
                <div className="flex h-[234px] ml-[91px] bg-[url('/src/assets/images/header-bg.jpeg')] bg-cover w-[571px] rounded-[24px] absolute top-[40rem] z-20">
                    <div className="w-[234px] overflow-hidden rounded-l-[24px] border-r border-black">
                        <img src={profile} alt="profile-picture" />
                    </div>
                    <div className="flex flex-col gap-[21px] mt-[23px] ml-[31px] font-['inter']">
                        <div className="flex items-center gap-[29px]">
                            <div className="text-2xl/[29.05px] font-bold">
                                DAN MACE
                            </div>
                            <div className="text-sm text-[#696969]">
                                /Johny_Films/
                            </div>
                        </div>

                        <div className="text-sm/[22.4px] text-[#696969] font-['inter']">
                            <div className="font-bold">Bio</div>
                            <div>
                                <p>Simply a film fan creating original</p>
                                <p>content for YouTube. Let's Collaborate.</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-32 h-[29px] rounded-l border border-black bg-transparent flex items-center justify-center">
                                <div className="w-[53px] text-center text-zinc-800 text-sm font-normal font-['Overlock']">Creator</div>
                            </div>
                            <div className="w-32 h-[29px] rounded-r bg-black bg-opacity-60">

                            </div>
                        </div>

                    </div>
                </div>
                <Band></Band>
            </div>

        </>
    )
} export default HeroSection;