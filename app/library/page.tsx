"use client"
import React, { useState } from 'react';
import PatentCard from "@/components/PatentCard";
import {Folder} from 'lucide-react'
import FolderCard from '@/components/FolderCard';
import PatentInfo from "@/components/PatentInfo";
import {useRouter} from 'next/navigation';
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import {
  storeFile, examples
} from '../../lib/features/analyzeSlice';

export default function Library() {
  const [selectedTab, setSelectedTab] = useState<String>('Recent History');
  const data = useAppSelector(examples);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleTabClick = (tab: String) => {
    setSelectedTab(tab);
  };

  async function storePatent(info:PatentInfo) {
    dispatch(storeFile(info));
  }

  function goToPatent(info:PatentInfo) {
    storePatent(info).then(
      function(value) {router.push('/patent');},
      function(error) {console.log(error);}
    )
  }

  function renderPatentCard(entry:PatentInfo) {
    return (
      <PatentCard
        info={entry}
        onClick={() => goToPatent(entry)}
      />);
  }


  return (
    
    <div className="flex flex-col justify-center items-center pt-[24px]">
      <main className="w-2/3 my-10">
        {/* Header text */}
        <p className="text-2xl font-normal leading-9">My Library</p>
        <p className="text-base font-normal leading-6 pt-[6px]">Review recent patent reading history, organize, and manage your patent projects all in one place.</p>

        {/* Select tab: Recent History or Workspace */}
        <div className="flex space-x-3 items-center pt-[24px] pb-[24px]">
        <button className={` rounded rounded-xl h-[40px] relative flex items-center justify-center px-4 ${selectedTab === 'Recent History' ? 'bg-custom-navbar' : ''}`} onClick={() => handleTabClick('Recent History')}>
            <p className="text-base font-normal leading-7">Recent History</p>
        </button>
          
          <button className={`rounded rounded-xl h-[40px] relative flex items-center justify-center px-4 ${selectedTab === 'Workspace' ? 'bg-custom-navbar' : ''}`} onClick={() => handleTabClick('Workspace')}>
            <p className="text-base font-normal leading-7">Workspace</p>
          </button>
        </div>
        

        {/* `Recent History` section */}
        {selectedTab === 'Recent History' && (
          <>
          <div className="flex justify-center w-full space-x-4 ">
            {data.map((patent) => renderPatentCard(patent))}
          </div>
        </>
        )}

        {/* `Workspace` section */}
        {selectedTab === 'Workspace' && (
          <>
          <div className="grid grid-cols-3 gap-4 w-full ">
              <FolderCard title="Computer Vision for Medi..." date="April 18, 2024"/>
              <FolderCard title="Biomedical Device" date="April 16, 2024"/>
              <FolderCard title="Inovation Strategy" date="April 12, 2024"/>
          </div>

          <div className="grid grid-cols-3 gap-4 w-full mt-4">
              <FolderCard title="Method and Apparatus for..." date="1 hr ago"/>
              <FolderCard title="Single sided light-actuate..." date="15:33 PM today"/>
          </div>
          </>
        )}



      </main>
    </div>
  );
}
