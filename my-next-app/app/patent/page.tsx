'use client';
import PatentReader from "@/components/PatentReader";
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import { url } from '../../lib/features/analyzeSlice'

export default function Patent() {

  const patent = useAppSelector(url);

    return (
      
        <div>
          <main className="mt-10 mx-14">
            <div 
            className="h-[230px] p-6 rounded-2xl border border-[#DAE5EA] bg-white" 
            style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}>
              <p className="text-base overflow-ellipsis font-normal leading-9 pt-[24px] pb-[12px]">Microfluidic device for deformable beads enrichment and self-regulated ordering and encapsulation in droplets.pdf</p>
              <PatentReader file={patent}/>
            </div>
          </main>
        </div>
   
    );
  }