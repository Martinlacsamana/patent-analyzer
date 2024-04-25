import { Folder } from 'lucide-react'

interface FolderCardProps {
    title: string;
    date: string;
  }

function FolderCard({title, date}:FolderCardProps) {
    return (
        <div className="flex flex-col w-full h-[100px] space-y-5 flex-col p-5 rounded-lg border border-[#DAE5EA] bg-white shadow">
        
            <div className="flex items-center">
                <div className="flex items-center space-x-2">
                    <Folder size={18}/>
                    <p className="text-base">{title}</p>
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