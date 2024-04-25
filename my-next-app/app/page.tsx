import Image from "next/image";
import {Download, Link2} from 'lucide-react'
import PatentCard from "@/components/PatentCard";

export default function Home() {
  return (
    
    <div className="flex justify-center items-center pt-[24px]">
      <main className="w-2/3">
        {/* Header text */}
        <p className="text-2xl font-normal leading-9">Hi, <span className="text-custom-blue">researcher 102-6</span>. Welcome back to your AI patent workspace.</p>
        <p className="text-base font-normal leading-6 pt-[6px]">Simply upload a patent document and let our AI analyze the data in seconds. Uncover valuable insights to drive your innovation work.</p>

        {/* `Read a new patent` section */}
        <p className="text-2xl font-normal leading-9 pt-[24px] pb-[12px]">Read a new patent</p>
        <div className="flex flex-col h-[230px] p-[92px_516px] items-center justify-center gap-2.5 shrink-0 rounded-lg border border-[#DAE5EA] bg-white" style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}>
          <div className="flex justify-center items-center space-x-2 pb-1">
            
            <div className="bg-custom-blue rounded-full p-1">
              <Download size={18} color="#ffffff" />
            </div>
            
            <p className="text-xl font-normal whitespace-nowrap">Upload or drop a file</p>


          </div>
         
          <p className="text-base font-normal whitespace-nowrap pb-6">Click to upload or drag a PDF or DOCX file here</p>

          <button className="w-36 flex justify-center items-center">
            <div className="w-full flex justify-center items-center space-x-2 bg-custom-blue rounded-lg pl-4 pr-4 p-1">
              <Link2 size={24} color="#ffffff" />
              <p className="text-white text-base font-normal"> From URL </p>
            </div>
          </button>
        </div>

        {/* `Recent History` section */}
        <p className="text-2xl font-normal leading-9 pt-[24px] pb-[12px]">Recent History</p>
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