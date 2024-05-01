'use client';
import React, {useState} from 'react'
import PatentReader from "@/components/PatentReader";
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import { selectedPatent } from '../../lib/features/analyzeSlice';
import { SendHorizonal } from "lucide-react";
import PatentInfo from "@/components/PatentInfo";
import {useRouter} from 'next/navigation';
import {
  fillInAnalysis, addPatent
} from '../../lib/features/analyzeSlice'

export default function Patent() {

  const patent = useAppSelector(selectedPatent);

  const [textAreaValue, setTextAreaValue] = useState(''); // State to hold the textarea value
  const [apiResponse, setApiResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);  // State to track loading status

  const handleSendClick = async () => {
    console.log("Sending:", textAreaValue);
    setIsLoading(true)
    try {
      const response = await fetch(
        'https://noggin.rea.gent/empirical-amphibian-4675',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer rg_v1_qk0uiwu06vbo7jc1w3syagx8vtpsz052628p_ngk',
          },
          body: JSON.stringify({
           
            "question": textAreaValue,
          }),
        }
      ).then(response => response.text())
      setApiResponse(response);  // Update the response state with the API data
    } catch (error) {
        console.error('Error fetching data:', error);
        setApiResponse('Failed to fetch data');
    } finally {
        setIsLoading(false);  // Set loading to false when the request completes
    }
    
};

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
            {/* Patent Reader on L.H.S */}
            <div 
            className="p-6 rounded-2xl border border-[#DAE5EA] bg-white w-3/5" 
            style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)'}}>
              <p className="text-base truncate overflow-ellipsis font-normal pt-[24px] pb-[12px] w-4/5">{patent.title}</p>
              <PatentReader file={patent}/>
            </div>
            
            {/* AI Generated Stuff on R.H.S */}
            

              <div 
              className="p-10 rounded-2xl border border-[#DAE5EA] bg-[#F8F8F8]" 
              style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)'}}>
                <p className="text-base overflow-ellipsis font-normal pt-[16px] pb-[12px] text-custom-blue">Problem Statement</p>
                <p className="text-sm font-normal pb-[12px]">The patent addresses the challenges of achieving robust ordered delivery of deformable beads in microfluidic devices, as well as the difficulty in achieving high percentage singlet encapsulation with a constant pressure source system.</p>
                <div className="inline-flex items-center gap-[12px] flex-[0_0_auto] relative pt-2 pb-6">
                  {patent.problemKeywords.map((tag, index) => (
                    <div key={index} className="border border-solid border-[#a0a0a1] h-[26px] flex-[0_0_auto] px-[16px] py-[4px] rounded-[8px] justify-center">
                      <p className="text-[#a0a0a1] text-xs font-normal">{tag}</p>
                    </div>
                  ))}
                </div>
                <p className="text-base overflow-ellipsis font-normal pt-[16px] pb-[12px] text-custom-blue">Solution</p>
                <p className="text-sm font-normal pb-[12px]">The inventors developed a microfluidic device that can reliably achieve high percentage singlet encapsulation with a constant pressure source system. This was achieved through the development of a pinch and reservoir sequence system for beads concentrating and delivery frequency stabilizing, as well as the design of a long funnel to guide and align deformable beads into a single row, and a core design to achieve self-regulated beads in droplets encapsulation within a constant pressure system.</p>
                <div className="inline-flex items-center gap-[12px] flex-[0_0_auto] relative pt-2 pb-6">
                  {patent.solutionKeywords.map((tag, index) => (
                      <div key={index} className="border border-solid border-[#a0a0a1] h-[26px] flex-[0_0_auto] px-[16px] py-[4px] rounded-[8px] justify-center">
                        <p className="text-[#a0a0a1] text-xs font-normal">{tag}</p>
                      </div>
                    ))}
                </div>
                <p className="text-base overflow-ellipsis font-normal pt-[16px] pb-[12px] text-custom-blue">Summary</p>
                <p className="text-sm font-normal pb-[12px]">This invention introduces a novel microfluidic device designed to improve the handling and processing of deformable beads in a controlled environment. The device features a series of inlets and microfluidic channels that facilitate the encapsulation of these beads into droplets, a method that is crucial for advancing laboratory assays such as single-cell analyses and other microreactor applications.</p>

             
                  

                {/* ChatBot */}
                <div 
                className="w-full p-5 mt-6"
                style={{
                  borderRadius: '16px',
                  border: '1px solid #DCE4E7',
                  background: '#FFF',
                  boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)'
                }}
                >
                  <p className="text-sm font-medium pb-2 ">Ask questions to interact with the patent file</p>
                  <div style={{ position: 'relative' }}>
                    <textarea
                      className="w-full h-[80px] p-2 text-sm"
                      placeholder="Type here..."
                      value={textAreaValue}
                      onChange={(e) => setTextAreaValue(e.target.value)}
        
                      style={{
                        borderRadius: '8px',
                        border: '1px solid #DCE4E7',
                        background: '#FFF',
                        boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)',
                        resize: 'none'  // Prevent resizing if not needed
                      }}
                    />
                    {!isLoading && (
                      <SendHorizonal
                      color="#59808C"
                      size={20}
                      style={{
                        position: 'absolute',
                        right: '10px',  // Adjust as needed for exact positioning
                        top: '10px',    // Adjust as needed for exact positioning
                        cursor: 'pointer'  // Optional, if you want it to act like a button
                      }}
                      onClick={handleSendClick}
                      className="cursor-pointer"
                    />
                    )
                    }

                    {isLoading && (
                       <div 
                       className="animate-spin rounded-full h-5 w-5 border-2 border-blue-200 border-t-4 border-t-[#59808C]"
                       style={{
                         position: 'absolute',
                         right: '10px',  // Adjust as needed for exact positioning
                         top: '10px',    // Adjust as needed for exact positioning
                         cursor: 'pointer'  // Optional, if you want it to act like a button
                       }}
                       >
 
                       </div>

                    )}
                    
  
                  </div>

                  

                </div>

                 {/* AI Response */}
                {apiResponse != '' && (
                  <div 
                  className="w-full p-5 mt-2"
                  style={{
                    borderRadius: '16px',
                    border: '1px solid #DCE4E7',
                    background: '#DAE5EA',
                    boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)'
                  }}
                  >
                    <p className="text-sm font-medium pb-2 ">AI Response:</p>
                    <p className="text-sm font-light">{apiResponse} </p>
                    
                  </div>
                )}
                

              </div>

           

            
          </main>
          </div>
    );
  }