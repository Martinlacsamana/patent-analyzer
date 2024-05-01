import { Folder } from 'lucide-react'

interface FolderCardProps {
    title: string;
    date: string;
  }

function FolderCard({title, date}:FolderCardProps) {
    return (
        <div className="flex flex-col h-[100px] space-y-5 flex-col py-5 pl-5 pr-10 rounded-lg border border-[#DAE5EA] bg-white shadow" style={{width: "20vw"}}>
        
            <div className="flex items-center w-full">
                <div className="flex items-center space-x-2 w-full">
                    <Folder size={18}/>
                    <p className="text-base truncate overflow-ellipsis w-full">{title}</p>
                </div>

                {/* Three-dots-vertical-svg */}
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                    className="bi bi-three-dots-vertical"
                    style={{ marginLeft: 'auto' }}
                >
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                </svg>
            </div>

            <div className="">
                <p className="text-xs text-[#A0A0A1]">{date}</p>
            </div>
    </div>

    )
    
}


export default FolderCard