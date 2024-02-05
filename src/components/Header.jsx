import React from "react";
import wallet from "../assets/images/wallet.png"
import notification from "../assets/images/notification.png"
import profile from "../assets/images/profile.jpeg"
import down from "../assets/images/down.png"
import cover from "../assets/images/cover.png"

//remaining -- change the fonts, align bg header img, header button align, gaps between buttons on header, add responsiveness, add cover image




function Header() {
    return (
        <div>
            <div className="flex justify-between h-[110px] border border-black bg-[url('/src/assets/images/header-bg.jpeg')] bg-cover z-20">
                <div className="my-[40px] ml-[123px] text-2xl/[29.05px] font-bold">
                    aBit
                </div>
                <div className="flex items-center gap-[16px] mr-[54px]">
                    <div className="text-xs/[14.09px] font-bold text-[#764CC2] border-2 border-[#764CC2] rounded-[60px] bg-cover bg-norepeat px-[22px] py-[12.5px] my-[35px] flex flex-cols justify-center">
                        share new video
                    </div>
                    <div className="h-7 w-7 opacity-[32%]">
                        <img src={wallet} alt="wallet-button" />
                    </div>
                    <div className="w-9 h-9 opacity-[32%]">
                        <img src={notification} alt="notification-button" />
                    </div>
                    <div className="w-[31px] h-[32px] rounded-full border border-black overflow-hidden ">
                        <img src={profile} alt="profile-photo" />
                    </div>
                    <div className="w-6 h-6 opacity-[40%]">
                        <img src={down} alt="down-button" />
                    </div>
                </div>
            </div>
            {/* <div className="h-[548px] border border-black overflow-hidden">
                <img className="w-full h-full object-cover  " src={cover} alt="cover-img" />
            </div> */}
        </div>
    )
} export default Header;