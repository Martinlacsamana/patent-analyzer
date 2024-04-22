"use client"
import React from 'react';
import {useRouter} from 'next/navigation';
import { UserRound } from 'lucide-react';


const NavBar = () => {
    const router = useRouter()

    return (
        <nav className="w-full h-[95px] bg-gray-800 flex items-center justify-between px-4 rounded-b-3xl bg-gradient-to-b from-[#DAE5EA] to-[#DAE5EA] shadow"
            style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}>
        <div>
            {/* If we had a brand name, we could put that here */}
            {/* <span className="text-white text-lg">Brand</span> */}
        </div>
        <div className="flex space-x-4">
           
            <button className="px-6 py-2 bg-white text-black rounded rounded-[9px] transition-colors">
                <p className="text-lg font-semibold"> <span className="font-medium pr-1">?</span> Help</p>
            </button>
            
            <button className="px-6 py-1 bg-white text-black rounded rounded-[9px]  transition-colors" onClick={() => router.push('/library')}>
                <p className="text-lg font-semibold">My Library</p>
            </button>
            <button className="px-6 py-1 bg-white text-black rounded rounded-[9px] transition-colors">
                <div className="flex space-x-2 justify-content items-center">
                    <UserRound size={18}/>
                    <p className="text-lg font-semibold">My Profile</p>
                </div>
            </button>
        </div>
        </nav>
    );
};

export default NavBar;