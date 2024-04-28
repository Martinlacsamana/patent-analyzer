import {Download, Link2} from 'lucide-react'

function PatentUpload() {
    return (
        <>
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
        </>

    )
}


export default PatentUpload