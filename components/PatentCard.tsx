import PatentInfo from "@/components/PatentInfo";
import {useRouter} from "next/navigation"

interface PatentCardProps {
  title: string;
  tags: string[];
  status: string;
  patentId: string;
}


function PatentCard({title, tags, status, patentId}:PatentCardProps) {
  const router = useRouter()

  return (
      <div className="flex w-1/3 max-h-[230px] flex-col p-5 rounded-lg border border-[#DAE5EA] bg-white shadow hover:bg-custom-navbar cursor-pointer "
      onClick={() => router.push("/patent")}
      >
          <div>
              <p className="text-base font-normal h-[90px]">{title}</p>
          </div>
        
        {/* Tags */}
        <div className="inline-flex items-center gap-[12px] flex-[0_0_auto] relative pt-6">
          {tags.map((tag, index) => (
            <div key={index} className="border border-solid border-[#a0a0a1] h-[26px] flex-[0_0_auto] px-[16px] py-[4px] rounded-[8px] justify-center bg-white">
              <p className="text-[#a0a0a1] text-xs font-normal">{tag}</p>
            </div>
          ))}
        </div>
  
        {/* Pending Status & Patent ID */}
        <div className="w-full flex self-stretch items-center flex-[0_0_auto] justify-between pt-8">
          <div className="inline-flex items-center gap-[8px] flex-[0_0_auto] overflow-hidden rounded-[8px] relative">
              <div className={`w-[8px] h-[8px] rounded-[4px] ${status === 'Active' ? 'bg-green-500' : 'bg-[#0075ff]'} relative`} />
                  <div className=" w-fit relative text-center whitespace-nowrap">
                      <p className="text-black text-xs font-normal">{status}</p>
                  </div>
              </div>
              <div className="mt-[-1.00px] text-[#a0a0a1] whitespace-nowrap">
                <p className="text-[#a0a0a1] text-xs font-normal">{patentId}</p>
                
              </div>
        </div>
      </div>
    );

}


export default PatentCard