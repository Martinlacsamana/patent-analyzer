'use client';
import { useCallback, useState } from 'react';
import {useRouter} from 'next/navigation';
import PatentCard from "@/components/PatentCard";
import PatentInfo from "@/components/PatentInfo";
import PatentUpload from "@/components/PatentUpload";
import PatentUploadLoading from "@/components/PatentUploadLoading";
import {Download, Link2} from 'lucide-react'
import SavePatent from '@/components/modals/SavePatent';
import pdfToText from "react-pdftotext";
import { useAppSelector, useAppDispatch } from '../lib/hooks'
import {
  storeFile, fillInAnalysis, addPatent, patents
} from '../lib/features/analyzeSlice'


export default function Home() {

  const [uploadedFile, setUploadedFile] = useState<File>();
  const [uploadedFileName, setUploadedFileName] = useState<string>();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const data = useAppSelector(patents);

  const handleUpload = (event: { target: { files: any; }; }) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFileName(file.name);
      setUploadedFile(file);
      setIsModalVisible(true); // Trigger the modal
    }
  };

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
          setIsModalVisible(true); // Show the modal
        }
      });
    } else {
      // Use DataTransfer interface to access the file(s)
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
        setUploadedFileName(file.name);
        setUploadedFile(file);
        setIsModalVisible(true); // Show the modal
      });
    }
  }

  function dragOverHandler(ev: { preventDefault: () => void; }) {
    console.log("File(s) in drop zone");
    ev.preventDefault();
  }

  async function storeNewPatent(url:string, folder:string, date:string) {
    const uploadedPatent = {
      title: "",
      folder: folder,
      date: date,
      tags: [],
      status: "",
      patentId: "",
      url: url,
      problem: "",
      problemKeywords: [],
      solution: "",
      solutionKeywords: [],
      summary: "",
      fulltext: "",
    }
    dispatch(storeFile(uploadedPatent));
  }


  async function storePatent(info:PatentInfo) {
    dispatch(storeFile(info));
  }

  function goToPatent(url:string, folder:string, date:string) {
    storeNewPatent(url, folder, date).then(
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
  
  function analyzePatent(folder:string, date:string) {
    let patent_text: string = "";
    if (uploadedFile) {
      const url = URL.createObjectURL(uploadedFile);
      pdfToText(uploadedFile)
        .then((text: string) => {
          patent_text = text;
          console.log(text);
        })
        .catch((error: Error) => console.error("Failed to extract text from pdf"));
      goToPatent(url, folder, date);
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
          className="flex flex-col h-[230px] items-center justify-center shrink-0 rounded-lg border border-[#DAE5EA] bg-white" 
          style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}
          id="drop_zone" onDrop={dropHandler} onDragOver={dragOverHandler}
          >
          <div className="flex flex-col justify-center items-center">
            <div className='flex space-x-2'>
              <div className="bg-custom-blue rounded-full p-1">
                <Download size={18} color="#ffffff" />
              </div>
              <p className="text-xl font-normal whitespace-nowrap">Upload a file</p>
            </div>
              
            <input
                id='upload'
                className="text-sm cursor-pointer w-52"
                type='file'
                onChange={handleUpload}
            />
            {/* <button onClick={() => analyzePatent()}>Go</button> */}
           
          </div>
        </div>

    


        {/* `Recent History` section */}
        <p className="text-xl font-normal leading-9 pt-[24px] pb-[12px]">Recent History</p>
        <div className="flex justify-center w-full space-x-4 ">
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
      
      {isModalVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
        <SavePatent title={uploadedFileName} onClose={() => setIsModalVisible(false)} analyzePatent={(folder:string, date:string) => analyzePatent(folder, date)} />
      </div>
    )}

    </div>
  );
}