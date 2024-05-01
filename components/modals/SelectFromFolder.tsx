import { useCallback, useState } from 'react';
import { Folder, File } from 'lucide-react';
import CreateFolder from './CreateFolder';

interface SelectFromFolderProps {
    onClose: () => void;
    analyzePatent?: () => void;
}

function SelectFromFolder({onClose, analyzePatent}: SelectFromFolderProps) {
    const [selectedPatent, setSelectedPatent] = useState<File | undefined>()
    const [selectedPatentName, setSelectedPatentName] = useState<String | undefined>()

    // Function to handle folder selection
    const handlePatentSelection = (folderName: string) => {
        setSelectedPatentName(folderName);
    };


    return (
        <div className="flex flex-col items-center justify-center min-h-screen"> {/* This div centers the modal */}
            <div className="flex flex-col h-[300px] w-[500px] rounded-xl border border-[#DCE4E7] bg-white shadow-lg p-4 pb-8 justify-between"> {/* Make this a flex column container */}
                
                <div>
                    <div className="relative float-right cursor-pointer" onClick={onClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#333333">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>

                    <div className="pl-4 pr-4 -mt-4">
                        {/* Header */}
                        <div className="mb-6 pt-10 flex items-center space-x-10">
                            <p className="text-lg font-medium whitespace-nowrap">Pick a Patent to View</p>
                        
                        </div>
                        
                        {/* Patents a user can select from */}
                        <div className="flex flex-col space-y-2">
                            {["Computer Vision for Medical", "Biomedical Device", "Innovation Strategy"].map((patentName) => (
                                <div
                                    key={patentName}
                                    className={`flex items-center space-x-2 border border-[#DAE5EA] rounded-xl bg-white py-2 px-3 ${selectedPatentName === patentName ? 'bg-[#BCD3DB]' : 'hover:bg-[#BCD3DB] cursor-pointer'}`}
                                    style={{ boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 0.10)' }}
                                    onClick={() => handlePatentSelection(patentName)}
                                >
                                    <File size={15} color="#A0A0A1"/>
                                    <p className="text-sm">{patentName}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

          
        </div>
    );
}

export default SelectFromFolder;