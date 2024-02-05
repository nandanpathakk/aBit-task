import React from "react";
import add from "../assets/images/plus.svg"
function NewRelease() {
    return (
        <div className="flex mt-[68px] gap-[42.36px] pl-[94px] pb-[244px] border-b border-[#D8D8D8]">
            <div className="bg-[#EDEDED] w-[283.64px] h-[312px] rounded-[24px] flex flex-col items-center gap-[62px] pt-[140px]">
                <div className="text-[32px]">
                    <img src={add} alt="add-icon" />
                </div>
                <div className="text-center p">
                    <p className="w-[222px] text-[14px]/[22.4px] text-[#A0A0A0;]">
                        You haven't uploaded any videos with aBit yet. Add now!
                    </p>
                </div>
            </div>

            <div className="bg-[url('/src/assets/images/titleImg.png')] bg-cover bg-center w-[283.64px] h-[312px] rounded-[24px] flex flex-col gap-[200px] pt-[19px]">
                <div>
                    <p className="font-bold text-[20px]/[24.2px] text-white ml-[13px]">The Sound of Silence</p>
                </div>
                <div className="flex gap-[40px] items-center justify-center w-[246.76px] h-[52.36px] bg-white bg-opacity-20 backdrop-blur-xl rounded-[12px] text-[12px] text-white ml-[18px]">
                    <div>
                        <p>Shares</p>
                        <p className="text-[14px] font-bold">317</p>
                    </div>
                    <div>
                        <p>Offered</p>
                        <p className="text-[14px] font-bold">75%</p>
                    </div>
                    <div>
                        <p>Raised</p>
                        <p className="text-[14px] font-bold">$9510</p>
                    </div>
                </div>
            </div>
        </div>
    )
} export default NewRelease;