import { useCallback, useState } from 'react';
import { Folder, File } from 'lucide-react';
import { useAppSelector, useAppDispatch } from '../../lib/hooks';
import {
    addFolder, folders
  } from '../../lib/features/analyzeSlice';

interface CreateFolderProps {
    onClose: () => void;
    analyzePatent: () => void;
}

function CreateFolder({onClose, analyzePatent}: CreateFolderProps) {
    const [selectedFolder, setSelectedFolder] = useState<String | undefined>();
    const [name, setName] = useState<string>("");
    const dispatch = useAppDispatch();
    const directories = useAppSelector(folders);

    // Function to handle folder selection
    const handleNew = (folderName: string) => {
        setSelectedFolder(folderName);
        dispatch(addFolder({name: folderName, date: "Just now"}));
        analyzePatent();
    };

    const onNameChange = (event: { target: { value: string; }; }) => {
        setName(event.target.value);
      };


    return (
        <div className="flex items-center justify-center min-h-screen"> {/* This div centers the modal */}
            <div className="flex flex-col h-[200px] w-[400px] rounded-xl border border-[#DCE4E7] bg-white shadow-lg p-4 pb-8 justify-between"> {/* Make this a flex column container */}
                
                {/* Header */}
                <div className="mb-2 -mt-8 pt-10 flex items-center space-x-10">
                    <p className="text-lg font-medium whitespace-nowrap">New Folder</p>
                </div>
                
                 {/* Input */}
                 <input 
                    className="px-4 py-2 border border=[#C1C1C1] rounded rounded-lg"
                    type=""
                    placeholder="Type here..."
                    value={name}
                    onChange={onNameChange}
                 
                 
                 
                 />
                 
       
             

                {/* Buttons */}
                <div className="flex justify-end items-center w-full pl-4 pr-4 mt-6 space-x-2">
                    <button 
                        className="flex items-center justify-center h-[30px] px-4 py-2 bg-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-300 hover:text-black text-sm whitespace-nowrap"
                        onClick={() => onClose()}>    
                            Cancel
                    </button>
                    <button 
                        className="flex items-center justify-center h-[30px] px-4 py-2 bg-[#59808C] text-white border border-[#DCE4E7] rounded-md rounded hover:bg-gray-600 text-sm whitespace-nowrap"
                        onClick={() => handleNew(name)}   
                        >
                            Create
                    </button>
                </div>

            </div>
        </div>
    );
}
export default CreateFolder;