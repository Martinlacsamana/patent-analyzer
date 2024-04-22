

interface RecentHistoryProps {
  title: string;
  tags: string[];
  status: string;
  patentId: string;
}


function RecentHistory({title, tags, status, patentId}:RecentHistoryProps) {
    return (
        <div className="flex w-1/3 flex-col p-8 rounded-lg border border-[#DAE5EA] bg-white shadow">
            <div>
                <p className="text-lg font-semibold h-[120px]">{title}</p>
            </div>
          
          {/* Tags */}
          <div className="inline-flex items-center gap-[12px] flex-[0_0_auto] relative pt-6">
            {tags.map((tag, index) => (
              <div key={index} className="border border-solid border-[#59808c] flex-[0_0_auto] px-[16px] py-[4px] rounded-[8px] justify-center bg-white">
                <p className="text-custom-grey font-semibold">{tag}</p>
              </div>
            ))}
          </div>
    
          {/* Pending Status & Patent ID */}
          <div className="w-full flex self-stretch items-center flex-[0_0_auto] justify-between pt-8">
            <div className="inline-flex items-center gap-[8px] flex-[0_0_auto] overflow-hidden rounded-[8px] relative">
                <div className={`w-[8px] h-[8px] rounded-[4px] ${status === 'Active' ? 'bg-green-500' : 'bg-[#0075ff]'} relative`} />
                    <div className=" w-fit mt-[-1.00px] text-black relative text-center whitespace-nowrap">
                        {status}
                    </div>
                </div>
                <div className="mt-[-1.00px] text-[#a0a0a1] whitespace-nowrap">
                {patentId}
                </div>
          </div>
        </div>
      );

}


export default RecentHistory