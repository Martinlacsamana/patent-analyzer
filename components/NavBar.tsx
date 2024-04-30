"use client"
import React from 'react';
import {useRouter} from 'next/navigation';
import { UserRound } from 'lucide-react';


const NavBar = () => {
    const router = useRouter()

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
           
            <button className="px-4 py-1 bg-white text-black rounded rounded-[9px] transition-colors flex items-center justify-center">
                <p className="text-sm font-normal"> <span className="font-medium pr-[2px]">?</span> Help</p>
            </button>
            
            <button className="px-4 py-1 bg-white text-black rounded rounded-[9px]  transition-colors flex items-center justify-center" onClick={() => router.push('/library')}>
                <p className="text-sm font-normal">My Library</p>
            </button>

            <button className="px-4 py-1 bg-white text-black rounded rounded-[9px] transition-colors flex items-center justify-center">
                <div className="flex space-x-2 justify-content items-center">
                    <UserRound size={14}/>
                    <p className="text-sm font-normal">My Profile</p>
                </div>
            </button>
        </div>
        </nav>
    );
};

export default NavBar;