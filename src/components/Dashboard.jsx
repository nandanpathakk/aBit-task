import React from "react";

function Dashboard() {
    return (
        <div className="flex gap-[255px] mt-[240px] ml-[93px] mr-[122px]">
            <div>
                <p className="text-[28px]/[33.59px] font-[Overlock]">Releases</p>
                <p className="italic text-[16px] text-[#565656]">Videos that you upload in collaboration with aBit appear here.</p>
            </div>
            <div className="grid grid-cols-4 text-[#696969] text-[14px]/[22.4px] font-['inter']">
                <div className="border-l-[0.5px] border-[#7A7A7A] pl-[17px] pr-[71px]">
                    <p className="font-bold text-[16px]/[25.6px] text-[#565656]">1</p>
                    <p>Shared</p>
                    <p>Videos</p>
                </div>
                <div className="border-l-[0.5px] border-[#7A7A7A] pl-[18px] pr-[82px]">
                    <p className="font-bold text-[16px]/[25.6px] text-[#565656]">$9510</p>
                    <p>Funds</p>
                    <p>Raised</p>
                </div>
                <div className="border-l-[0.5px] border-[#7A7A7A] pl-[16px] pr-[52px]">
                    <p className="font-bold text-[16px]/[25.6px] text-[#565656]">317</p>
                    <p>Co-owner</p>
                    <p>community</p>
                </div>
                <div className="border-l-[0.5px] border-[#7A7A7A] pl-[19px]">
                    <p className="font-bold text-[16px]/[25.6px] text-[#565656]">$3804</p>
                    <p>Co-owner</p>
                    <p>Earnings</p>
                </div>
            </div>
        </div>
    )
} export default Dashboard;