'use client';
import PatentReader from "@/components/PatentReader";
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import { selectedPatent } from '../../lib/features/analyzeSlice';
import PatentInfo from "@/components/PatentInfo";
import {useRouter} from 'next/navigation';
import {
  fillInAnalysis, addPatent
} from '../../lib/features/analyzeSlice'

export default function Patent() {

  const patent = useAppSelector(selectedPatent);
  const router = useRouter();
  const dispatch = useAppDispatch();

  async function summarize(dummy: boolean=false) {
    if (dummy){
      return "bruh";
    }
    const response = await fetch(
      'https://noggin.rea.gent/unaware-narwhal-7693',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer rg_v1_j0rj8cvquknfvmazs4itkskl736tclt8xc1j_ngk',
        },
        body: JSON.stringify({
          // replace "bruh" with patent_text
          "patent": patent,
        }),
      }
    ).then(response => response.text());

    dispatch(fillInAnalysis(response));
    dispatch(addPatent());
    }

    summarize().then(
      function(value) {console.log('success')}, // turn off loader
      function(error) {console.log(error);}
    )

    return (
      
        <div>
          <main className="my-10 mx-14 flex gap-5">
            <div 
            className="p-6 rounded-2xl border border-[#DAE5EA] bg-white w-3/5" 
            style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)'}}>
              <p className="text-base truncate overflow-ellipsis font-normal pt-[24px] pb-[12px] w-4/5">{patent.title}</p>
              <PatentReader file={patent}/>
            </div>
            <div 
            className="p-10 rounded-2xl border border-[#DAE5EA] bg-[#F8F8F8]" 
            style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)'}}>
              <p className="text-base overflow-ellipsis font-normal pt-[16px] pb-[12px] text-custom-blue">Problem Statement</p>
              <p className="text-sm font-normal pb-[12px]">{patent.problem}</p>
              <div className="inline-flex items-center gap-[12px] flex-[0_0_auto] relative pt-2 pb-6">
                {patent.problemKeywords.map((tag, index) => (
                  <div key={index} className="border border-solid border-[#a0a0a1] h-[26px] flex-[0_0_auto] px-[16px] py-[4px] rounded-[8px] justify-center">
                    <p className="text-[#a0a0a1] text-xs font-normal">{tag}</p>
                  </div>
                ))}
              </div>
              <p className="text-base overflow-ellipsis font-normal pt-[16px] pb-[12px] text-custom-blue">Solution</p>
              <p className="text-sm font-normal pb-[12px]">{patent.solution}</p>
              <div className="inline-flex items-center gap-[12px] flex-[0_0_auto] relative pt-2 pb-6">
                {patent.solutionKeywords.map((tag, index) => (
                    <div key={index} className="border border-solid border-[#a0a0a1] h-[26px] flex-[0_0_auto] px-[16px] py-[4px] rounded-[8px] justify-center">
                      <p className="text-[#a0a0a1] text-xs font-normal">{tag}</p>
                    </div>
                  ))}
              </div>
              <p className="text-base overflow-ellipsis font-normal pt-[16px] pb-[12px] text-custom-blue">Summary</p>
              <p className="text-sm font-normal pb-[12px]">{patent.summary}</p>
            </div>
          </main>
          </div>
    );
  }