"use client"
import React from 'react';
import { File } from 'lucide-react';
import LoadingAnimation from './LoadingAnimation';


function PatentUploadLoading() {
    return (
        <>
        <div className="flex flex-col h-[230px] p-[92px_516px] items-center justify-center space-y-4 gap-2.5 shrink-0 rounded-lg border border-[#DAE5EA] bg-[#F8F8F8]" style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}>
      
            <p className="text-xl font-normal whitespace-nowrap">Uploading your patent file...</p>
          
            {/* Our Loading Animation */}
            <LoadingAnimation/>

            <div className="flex items-center space-x-1 justify-center">
                <File size={14}/>
                <p className="text-xs whitespace-nowrap">Microfluidic device for deformable beads...</p>
            </div>
        </div>
        </>
    );
}

export default PatentUploadLoading;