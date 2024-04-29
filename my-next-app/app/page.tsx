'use client';
import { useCallback, useState } from 'react';
import {useRouter} from 'next/navigation';
import PatentCard from "@/components/PatentCard";
import PatentInfo from "@/components/PatentInfo";
import PatentUpload from "@/components/PatentUpload";
import PatentUploadLoading from "@/components/PatentUploadLoading";

import { useAppSelector, useAppDispatch } from '../lib/hooks'
import {
  storeFile, examples
} from '../lib/features/analyzeSlice'

export default function Home() {

  const [uploadedFile, setUploadedFile] = useState<File>();
  const [uploadedFileName, setUploadedFileName] = useState<string>();
  const router = useRouter();
  const dispatch = useAppDispatch();
  const data = useAppSelector(examples);

  const handleUpload = (event: { target: { files: any; }; }) => {
    const file = event.target.files;
    setUploadedFileName(file.name);
    setUploadedFile(file[0]);
  }

  function dropHandler(ev: { preventDefault: () => void; dataTransfer: { items: any; files: any; }; }) {
    console.log("File(s) dropped");
  
    // Prevent default behavior (Prevent file from being opened)
    ev.preventDefault();
  
    if (ev.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      [...ev.dataTransfer.items].forEach((item, i) => {
        // If dropped items aren't files, reject them
        if (item.kind === "file") {
          const file = item.getAsFile();
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
        setUploadedFileName(file.name);
        setUploadedFile(file);
      });
    }
  }

  function dragOverHandler(ev: { preventDefault: () => void; }) {
    console.log("File(s) in drop zone");
    ev.preventDefault();
  }

  async function storeNewPatent(url:string) {
    const uploadedPatent = {
      title: "",
      tags: [],
      status: "",
      patentId: "",
      url: url,
      problem: "",
      problemKeywords: [],
      solution: "",
      solutionKeywords: [],
      summary: "",
    }
    dispatch(storeFile(uploadedPatent));
  }

  async function storePatent(info:PatentInfo) {
    dispatch(storeFile(info));
  }

  function goToPatent(url:string) {
    storeNewPatent(url).then(
      function(value) {router.push('/patent');},
      function(error) {console.log(error);}
    )
  }

  function goToRecent(info:PatentInfo) {
    storePatent(info).then(
      function(value) {router.push('/patent');},
      function(error) {console.log(error);}
    )
  }

  function analyzePatent() {
    if (uploadedFile) {
      const url = URL.createObjectURL(uploadedFile);
      goToPatent(url);
    }
  }

  function renderPatentCard(entry:PatentInfo) {
    return (
      <PatentCard
        info={entry}
        onClick={() => goToRecent(entry)}
      />);
  }

  return (
    
    <div className="flex justify-center items-center pt-[24px]">
      <main className="w-3/4 mt-10">
        {/* Header text */}
        <p className="text-xl font-normal leading-9">Hi, <span className="text-custom-blue">researcher 102-6</span>. Welcome back to your AI patent workspace.</p>
        <p className="text-sm font-normal leading-6 pt-[6px]">Simply upload a patent document and let our AI analyze the data in seconds. Uncover valuable insights to drive your innovation work.</p>

        {/* `Read a new patent` section */}
        <p className="text-xl font-normal leading-9 pt-[24px] pb-[12px]">Read a new patent</p>
        <div 
          className="flex flex-col h-[230px] items-center justify-center gap-2.5 shrink-0 rounded-lg border border-[#DAE5EA] bg-white" 
          style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}
          id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}
          >
          <div className="flex justify-center items-center space-x-2 pb-1">
            <div>
              <p className="text-base font-normal whitespace-nowrap">Upload or drop a file</p>
              <form>
                <input
                    id='upload'
                    className="text-sm cursor-pointer"
                    type='file'
                    onChange={handleUpload}
                    value={uploadedFileName}
                />
              </form>
              <button onClick={() => analyzePatent()}>Go</button>
            </div>
          </div>
        </div>


        {/* `Recent History` section */}
        <p className="text-xl font-normal leading-9 pt-[24px] pb-[12px]">Recent History</p>
        <div className="flex justify-center w-full space-x-4 pb-10">

          {data.map((patent) => renderPatentCard(patent))}
          
        </div>

      </main>
    </div>
  );
}