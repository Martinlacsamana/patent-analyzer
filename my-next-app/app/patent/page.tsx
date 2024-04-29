'use client';
import PatentReader from "@/components/PatentReader";
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import { url } from '../../lib/features/analyzeSlice'

export default function Patent() {

  const patent = useAppSelector(url);

    return (
      
        <div>
          <main className="my-10 mx-14 flex gap-5">
            <div 
            className="p-6 rounded-2xl border border-[#DAE5EA] bg-white w-3/5" 
            style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)'}}>
              <p className="text-base truncate overflow-ellipsis font-normal pt-[24px] pb-[12px] w-3/5">Microfluidic device for deformable beads enrichment and self-regulated ordering and encapsulation in droplets.pdf</p>
              <PatentReader file={patent}/>
            </div>
            <div 
            className="p-10 rounded-2xl border border-[#DAE5EA] bg-[#F8F8F8]" 
            style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)'}}>
              <p className="text-base overflow-ellipsis font-normal pt-[16px] pb-[12px] text-custom-blue">Problem Statement</p>
              <p className="text-sm font-normal pb-[12px]">The patent addresses the challenges of achieving robust ordered delivery of deformable beads in microfluidic devices, as well as the difficulty in achieving high percentage singlet encapsulation with a constant pressure source system.</p>
              <div className="inline-flex items-center gap-[12px] flex-[0_0_auto] relative pt-2 pb-6">
                {["microfluidics", "beads", "singlet encapsulation"].map((tag, index) => (
                  <div key={index} className="border border-solid border-[#a0a0a1] h-[26px] flex-[0_0_auto] px-[16px] py-[4px] rounded-[8px] justify-center">
                    <p className="text-[#a0a0a1] text-xs font-normal">{tag}</p>
                  </div>
                ))}
              </div>
              <p className="text-base overflow-ellipsis font-normal pt-[16px] pb-[12px] text-custom-blue">Solution</p>
              <p className="text-sm font-normal pb-[12px]">The inventors developed a microfluidic device that can reliably achieve high percentage singlet encapsulation with a constant pressure source system. This was achieved through the development of a pinch and reservoir sequence system for beads concentrating and delivery frequency stabilizing, as well as the design of a long funnel to guide and align deformable beads into a single row, and a core design to achieve self-regulated beads in droplets encapsulation within a constant pressure system.</p>
              <div className="inline-flex items-center gap-[12px] flex-[0_0_auto] relative pt-2 pb-6">
                {["pinch and reservoir", "funnel"].map((tag, index) => (
                    <div key={index} className="border border-solid border-[#a0a0a1] h-[26px] flex-[0_0_auto] px-[16px] py-[4px] rounded-[8px] justify-center">
                      <p className="text-[#a0a0a1] text-xs font-normal">{tag}</p>
                    </div>
                  ))}
              </div>
              <p className="text-base overflow-ellipsis font-normal pt-[16px] pb-[12px] text-custom-blue">Summary</p>
              <p className="text-sm font-normal pb-[12px]">This invention introduces a novel microfluidic device designed to improve the handling and processing of deformable beads in a controlled environment. The device features a series of inlets and microfluidic channels that facilitate the encapsulation of these beads into droplets, a method that is crucial for advancing laboratory assays such as single-cell analyses and other microreactor applications.</p>
            </div>
          </main>
          </div>
    );
  }