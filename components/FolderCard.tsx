import { Folder } from 'lucide-react'

interface FolderCardProps {
    title: string;
    date: string;
    handleClick: () => void;
    setIsModalVisible: React.Dispatch<React.SetStateAction<Boolean>>;
  }

function FolderCard({title, date, handleClick, setIsModalVisible}:FolderCardProps) {

    function handleFolderClick() {
        handleClick();
        setIsModalVisible(true)
    }
    
    return (

        <div 
            className="flex flex-col w-full h-[100px] space-y-5 flex-col p-5 rounded-lg border border-[#DAE5EA] bg-white shadow hover:bg-custom-navbar cursor-pointer "
            style={{width: "20vw"}}
            onClick={() => handleFolderClick()}
            >
            

            <div className="flex items-center w-full">
                <div className="flex items-center space-x-2 w-full">
                    <Folder size={18}/>
                    <p className="text-base truncate overflow-ellipsis w-full">{title}</p>
                </div>
            </div>

            <div className="">
                <p className="text-xs text-[#A0A0A1]">{date}</p>
            </div>
    </div>

    )
    
}


export default FolderCard