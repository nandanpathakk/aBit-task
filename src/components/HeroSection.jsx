import React from "react";
import profile from "../assets/images/profile.jpeg"
import cover from "../assets/images/cover.png"
import Band from "./Band";

//remaining - align button, ass shadown, align profile img

function HeroSection() {
    return (<>
        <div className="bg-[url('/src/assets/images/cover.png')] h-[600px] bg-cover bg-center overflow-hidden z-10 relative">
            </div>
            <div>
            <div className="flex h-[234px] ml-[91px] bg-[url('/src/assets/images/header-bg.jpeg')] bg-cover w-[571px] rounded-[24px] absolute top-[436px] z-20">
                <div className="w-[234px] overflow-hidden rounded-l-[24px] border-r border-black">
                    <img src={profile} alt="" />
                </div>
                <div className="flex flex-col gap-[21px] mt-[23px] ml-[31px]">
                    <div className="flex items-center gap-[29px]">
                        <div className="text-2xl/[29.05px] font-bold ">
                            DAN MACE
                        </div>
                        <div className="text-sm text-[#696969]">
                            /Johny_Films/
                        </div>
                    </div>

                    <div className="text-sm/[22.4px] text-[#696969]">
                        <div className="font-bold">Bio</div>
                        <div>
                            <p>Simply a film fan creating original</p>
                            <p>content for YouTube. Let's Collaborate.</p>
                        </div>
                    </div>
                    {/* <div className="flex bg-[#313131]">
                        <div className="w-[129px] h-[29px] border border-black rounded-[4px]">
                        </div>
                        <div className="w-[128px] h-[29px]">

                        </div>
                    </div> */}

                        <div className="h-[29px] w-[256px] border border-black rounded-[4px] flex">
                            <div className="h-[28px] w-[129px] border-r border-black rounded-[4px]" >
                                <p>Creator</p>
                            </div>
                        </div>

                </div>
            </div>
        <Band></Band>
        </div>
        
        </>
    )
} export default HeroSection;