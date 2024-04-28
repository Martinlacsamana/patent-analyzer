import Image from "next/image";
import {Download, Link2} from 'lucide-react'
import PatentCard from "@/components/PatentCard";
import PatentUpload from "@/components/PatentUpload";
import PatentUploadLoading from "@/components/PatentUploadLoading";

export default function Home() {
  return (
    
    <div className="flex justify-center items-center pt-[24px]">
      <main className="w-2/3">
        {/* Header text */}
        <p className="text-2xl font-normal leading-9">Hi, <span className="text-custom-blue">researcher 102-6</span>. Welcome back to your AI patent workspace.</p>
        <p className="text-base font-normal leading-6 pt-[6px]">Simply upload a patent document and let our AI analyze the data in seconds. Uncover valuable insights to drive your innovation work.</p>

        {/* `Read a new patent` section */}
        <p className="text-2xl font-normal leading-9 pt-[24px] pb-[12px]">Read a new patent</p>
        
        <PatentUpload/>
        {/* <PatentUploadLoading/> */}

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