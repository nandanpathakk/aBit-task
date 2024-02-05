import React from "react";

function Footer(){
    return(
        <div className="flex gap-[705px] pt-[141px] pb-[125px] px-[135px]">
            <div className="flex flex-col gap-[10px]">
                <div className="font-bold text-[40px]/[48/41px] text-[#262626]">
                    aBit
                </div>
                <div className="text-[20px]/[23.99px]">
                    <p>Changing the way in which</p> 
                    <p>creators and fans interact.</p>
                </div>
            </div> 

            <div className="flex flex-col justify-around border-l border-[#9F9D9D] pl-[23px] font-bold text-[14px]/[16.94px] text-[#262626FC]">
                <p>Home</p>
                <p>Are you a Creator?</p>
                <p>Support</p>
            </div>
                    
        </div>
    )
}export default Footer;