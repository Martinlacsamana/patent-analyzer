import { useCallback, useState } from 'react';
import { Folder, File } from 'lucide-react';
import CreateFolder from './CreateFolder';
import PatentInfo from "@/components/PatentInfo";
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import {
    storeFile, folders
  } from '../../lib/features/analyzeSlice';

interface SavePatentProps {
    onClose: () => void;
    analyzePatent: (folder:string, date:string) => void;
    title: string | undefined;
}

function SavePatent({onClose, title, analyzePatent}: SavePatentProps) {
    const [selectedFolder, setSelectedFolder] = useState<string>("")
    const [isModalVisible, setIsModalVisible] = useState(false);
    const directories = useAppSelector(folders);
    const dispatch = useAppDispatch();

    // Handles truncating the patent filename if it's too long
    // function formatTitle(title: string, maxLength: number = 28): string {
    //     return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
    // }

    // Function to handle folder selection
    const handleFolderClick = (folderName: string) => {
        setSelectedFolder(folderName);
    };

    if (isModalVisible) {
        return <CreateFolder onClose={() => setIsModalVisible(false)} analyzePatent={(folder:string, date:string) => analyzePatent(folder, date)} />;
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen"> {/* This div centers the modal */}
            <div className="flex flex-col h-[500px] w-[500px] rounded-xl border border-[#DCE4E7] bg-white shadow-lg p-4 pb-8 justify-between"> {/* Make this a flex column container */}
                
                <div>
                    <div className="relative float-right cursor-pointer" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#333333">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <div className="pl-4 pr-4 -mt-4">
                        {/* Header */}
                        <div className="mb-6 pt-10 flex items-center space-x-10">
                            <p className="text-lg font-medium whitespace-nowrap">Save the new patent</p>
                            <div className="flex items-center space-x-1 justify-center ">
                                <File size={14}/>
                                <p className="text-xs truncate overflow-ellipsis whitespace-nowrap">{title}</p>
                            </div>
                        </div>
                        
                        {/* Folders a user can select from */}
                        <div className="flex flex-col space-y-2">
                            {directories.map((folder) => (
                                <div
                                    key={folder.name}
                                    className={`flex items-center space-x-2 border border-[#DAE5EA] rounded-xl bg-white py-2 px-3 ${selectedFolder === folder.name ? '!bg-[#BCD3DB]' : 'hover:bg-[#BCD3DB] cursor-pointer'}`}
                                    style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}
                                    onClick={() => handleFolderClick(folder.name)}
                                >
                                    <Folder size={15}/>
                                    <p className="text-sm">{folder.name}</p>
                                </div>
                            ))}
                        </div>

                        
                        <div className="py-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="220" height="2" viewBox="0 0 352 2" fill="none">
                                <path d="M1 1H351" stroke="#DAE5EA" stroke-linecap="round"/>
                            </svg>
                        </div>

                        {/* Patents that were previously saved! */}
                        {/* <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2 border border-[#DAE5EA] rounded-xl bg-white py-2 px-3" style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}>
                                <File size={15} color="#A0A0A1"/>
                                <p className="text-sm text-[#A0A0A1]">Method and Apparatus for Image-Based Navigation</p>
                            </div>

                            <div className="flex items-center space-x-2 border border-[#DAE5EA] rounded-xl bg-white py-2 px-3" style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}>
                                <File size={15} color="#A0A0A1"/>
                                <p className="text-sm text-[#A0A0A1]">Single sided light-actuated microfluidic device with...</p>
                            </div>

                        </div> */}
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-between items-center w-full pl-4 pr-4 mt-6">
                    <button 
                        className="flex items-center justify-center h-[30px] px-4 py-2 bg-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-300 hover:text-black text-sm whitespace-nowrap"
                        onClick={() => setIsModalVisible(true)}
                        >
                            Create New Folder
                    </button>
                    <div className="flex space-x-4">
                        <button 
                            className="flex items-center justify-center h-[30px] px-4 py-2 bg-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-300 hover:text-black text-sm whitespace-nowrap"
                            onClick={() => analyzePatent("","Just now")}>
                                Skip Saving
                        </button>
                        <button className="flex items-center justify-center h-[30px] px-4 py-2 bg-[#59808C] text-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-600 text-sm whitespace-nowrap" onClick={() => analyzePatent(selectedFolder,"Just now")}>Save</button>
                    </div>
                </div>
            </div>

          
        </div>
    );
}
export default SavePatent;