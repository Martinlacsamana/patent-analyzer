import { Folder } from 'lucide-react'

interface FolderCardProps {
    title: string;
    date: string;
    setIsModalVisible: React.Dispatch<React.SetStateAction<Boolean>>;
  }

function FolderCard({title, date, setIsModalVisible}:FolderCardProps) {
    return (
        <div 
            className="flex flex-col w-full h-[100px] space-y-5 flex-col p-5 rounded-lg border border-[#DAE5EA] bg-white shadow hover:bg-custom-navbar cursor-pointer"
            onClick={() => setIsModalVisible(true)}
            >
            
        
            <div className="flex items-center">
                <div className="flex items-center space-x-2">
                    <Folder size={18}/>
                    <p className="text-base">{title}</p>
                </div>
            </div>

            <div className="">
                <p className="text-xs text-[#A0A0A1]">{date}</p>
            </div>
    </div>

    )
    
}


export default FolderCard