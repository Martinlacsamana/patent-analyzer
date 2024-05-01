"use client"
import React, { useState } from 'react';
import {useRouter} from 'next/navigation';
import { UserRound } from 'lucide-react';
import Help from './modals/Help';
import MyProfile from './modals/MyProfile';

const NavBar = () => {
    const router = useRouter()
    const [isHelpVisible, setIsHelpVisible] = useState<Boolean>(false)
    const [isProfileVisible, setIsProfileVisible] = useState<Boolean>(false)

    return (
        <nav className="w-full h-[70px] bg-gray-800 flex items-center justify-between px-4 rounded-b-3xl bg-gradient-to-b from-[#DAE5EA] to-[#DAE5EA] shadow"
            style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}>
            <div onClick={() => router.push('/')} className="cursor-pointer">
                {/* If we had a brand name, we could put that here */}


                <div className=" hover:bg-[#59808C] text-black text-lg font-semibold hover:text-white ml-8 px-3 py-2 bg-white text-black rounded rounded-[9px]" onClick={() => router.push('/')}>
                P.AI
                </div>
                

            </div>
            <div className="flex  space-x-4 h-[30px]">
            
                <button 
                    className="px-4 py-1 bg-white text-black rounded rounded-[9px] transition-colors flex items-center justify-center"
                    onClick={() => setIsHelpVisible(true)}
                    >
                    
                    <p className="text-sm font-normal"> <span className="font-medium pr-[2px]">?</span> Help</p>
                </button>
                
                <button className="px-4 py-1 bg-white text-black rounded rounded-[9px]  transition-colors flex items-center justify-center" onClick={() => router.push('/library')}>
                    <p className="text-sm font-normal">My Library</p>
                </button>

                <button className="px-4 py-1 bg-white text-black rounded rounded-[9px] transition-colors flex items-center justify-center" onClick={() => setIsProfileVisible(true)}>
                    <div className="flex space-x-2 justify-content items-center">
                        <UserRound size={14}/>
                        <p className="text-sm font-normal">My Profile</p>
                    </div>
                </button>
            </div>

            {isHelpVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
                    <Help onClose={() => setIsHelpVisible(false)} />
                </div>
            )} 
            {isProfileVisible && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
                    <MyProfile onClose={() => setIsProfileVisible(false)} />
                </div>
            )} 

        </nav>
    );
};

export default NavBar;