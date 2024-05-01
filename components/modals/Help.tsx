
interface HelpProps {
    onClose?: () => void;
}


function Help({onClose}:HelpProps) {

    return(
        <div className="flex flex-col items-center justify-center min-h-screen"> {/* This div centers the modal */}
            <div className="flex flex-col relative items-center justify-center h-[500px] w-[600px] rounded-xl border border-[#DCE4E7] bg-white shadow-lg px-16">
                
                {/* Back Button */}
                <div className="absolute top-0 right-0 pt-4 px-4 cursor-pointer" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#333333">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
               

                {/* Header */}
                <div className="bg-custom-blue text-white py-2 px-1 text-lg font-semibold hover:text-white rounded rounded-[9px] -mt-4">
                    P.AI
                </div>
                <p className="pt-6 pb-3 text-lg font-normal"> How to Use </p>

                {/* Steps */}
                <div className="flex flex-col justify-center space-y-3">
                    <p className="text-sm font-light">1. Simply start by uploading a patent document on the home page.</p>
                    <p className="text-sm font-light">2. Choose the desired location to save the new patent in your workspace.</p>
                    <p className="text-sm font-light">3. Enjoy reading your AI-generated patent insights with a few clicks.</p>
                    <p className="text-sm font-light">4. Interacting with the patent document through the chatbot to uncover specific inofrmation relevant to your needs.</p>
                    <p className="text-sm font-light">5. Keep all your patent files organized in your library, where you have full access to past insights and conversations.</p>
                </div>


                {/* Credits */}
                <div className="flex flex-col items-center justify-center pt-6 space-y-1">
                    <p className="text-xs font-medium text-[#59808C]">Credits</p>
                    <p className="text-xs font-light text-[#59808C]">Jamie Walton, Jiayi Liu, Martin Lacsamana, Pranit Panda, Wanlun Ding</p>
                    <p className="text-xs font-light text-[#59808C]"><span className="font-medium">Special thanks to</span> Bjoern Hartmann, Christopher Bannon, Timothy Aveni</p>
                </div>
            </div>
        </div>
    )

}


export default Help