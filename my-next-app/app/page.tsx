'use client';
import { useCallback, useState } from 'react';
import {useRouter} from 'next/navigation';
import PatentCard from "@/components/PatentCard";
import PatentUpload from "@/components/PatentUpload";
import PatentUploadLoading from "@/components/PatentUploadLoading";

import { useAppSelector, useAppDispatch } from '../lib/hooks'
import {
  storeFileURL
} from '../lib/features/analyzeSlice'

export default function Home() {

  const [uploadedFile, setUploadedFile] = useState<File>();
  const [uploadedFileName, setUploadedFileName] = useState<string>();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const handleUpload = (event: { target: { files: any; }; }) => {
    const file = event.target.files;
    console.log(file);
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

  async function storePatent(url:string) {
    dispatch(storeFileURL(url));
  }

  function analyzePatent() {
    if (uploadedFile) {
      const url = URL.createObjectURL(uploadedFile);
      storePatent(url).then(
        function(value) {router.push('/patent');},
        function(error) {console.log(error);}
      )
    }
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
            
            {/* <div className="bg-custom-blue rounded-full p-1">
              <Download size={18} color="#ffffff" />
            </div> */}
            
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
         
          {/* <p className="text-sm font-normal whitespace-nowrap pb-6">Click to upload or drag a PDF or DOCX file here</p>

          <button className="w-36 flex justify-center items-center">
            <div className="w-full flex justify-center items-center space-x-2 bg-custom-blue rounded-lg pl-4 pr-4 p-1">
              <Link2 size={24} color="#ffffff" />
              <p className="text-white text-base font-normal"> From URL </p>
            </div>
          </button> */}
        </div>


        {/* `Recent History` section */}
        <p className="text-xl font-normal leading-9 pt-[24px] pb-[12px]">Recent History</p>
        <div className="flex justify-center w-full space-x-4 pb-10">
          
          <PatentCard
            title="Microfluidic device for deformable beads enrichment and self-regulated ordering and encapsulation in droplets"
            tags={['Biomed', 'Physical Device']}
            status="Pending"
            patentId="US20210331174A1"
          />

          <PatentCard
            title="Method and Apparatus for Image-Based Navigation"
            tags={['Biomed']}
            status="Pending"
            patentId="US20240024042A1"
          />

          <PatentCard
            title="Single sided light-actuated microfluidic device with integrated mesh ground"
            tags={['Biomed']}
            status="Active"
            patentId="US9815056B2"
          />
        </div>

      </main>
    </div>
  );
}