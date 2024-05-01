import { UserSearch, LogOut } from "lucide-react";

interface MyProfileProps {
    onClose?: () => void;
}


function MyProfile({onClose}: MyProfileProps) {

    return(
        <div className="flex flex-col items-center justify-center min-h-screen"> {/* This div centers the modal */}
            <div className="flex flex-col relative items-center justify-center h-[350px] w-[350px] rounded-xl border border-[#DCE4E7] bg-white shadow-lg px-16">
                
                {/* Back Button */}
                <div className="absolute top-0 right-0 pt-4 px-4 cursor-pointer" onClick={onClose}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="#333333">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
               

                {/* Header */}
                <div className="flex justify-center items-center space-x-1">
                    <UserSearch size={18} color="#59808C" />
                    <p className="text-lg font-light"> Researcher </p>
                </div>
                

                {/* Avatar */}
                <div className="py-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none">
                    <circle cx="40" cy="40" r="40" fill="#DAE5EA"/>
                    <mask id="mask0_115_395" style={{ maskType: 'alpha'}} maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                        <circle cx="40" cy="40" r="40" fill="#DAE5EA"/>
                    </mask>
                    <g mask="url(#mask0_115_395)">
                        <path d="M40.0001 16.6621C43.3064 16.6621 46.5384 17.6425 49.2875 19.4794C52.0366 21.3163 54.1793 23.9271 55.4445 26.9817C56.7098 30.0363 57.0408 33.3976 56.3958 36.6403C55.7508 39.8831 54.1587 42.8618 51.8207 45.1997C49.4828 47.5376 46.5042 49.1297 43.2614 49.7747C40.0187 50.4197 36.6574 50.0887 33.6028 48.8234C30.5482 47.5582 27.9374 45.4155 26.1005 42.6664C24.2636 39.9173 23.2832 36.6853 23.2832 33.379L23.2999 32.6535C23.4869 28.3497 25.328 24.2843 28.4394 21.3049C31.5508 18.3256 35.6923 16.6624 40.0001 16.6621Z" fill="#59808C"/>
                        <path d="M61.3633 61.091C57.7444 57.9559 52.836 56.1947 47.7179 56.1947H32.2799C27.1619 56.1947 22.2535 57.9559 18.6345 61.091C15.0155 64.226 12.9824 68.478 12.9824 72.9116V76.255C12.9824 78.0284 13.7957 79.7292 15.2433 80.9832C16.6909 82.2373 18.6542 82.9418 20.7014 82.9418H59.2964C61.3437 82.9418 63.307 82.2373 64.7546 80.9832C66.2022 79.7292 67.0155 78.0284 67.0155 76.255V72.9116C67.0155 68.478 64.9823 64.226 61.3633 61.091Z" fill="#59808C"/>
                    </g>
                    </svg>
                </div>

                {/* Avatar Name */}
                <p className="pb-2 text-lg font-normal"> Hi, <span className="text-[#59808C]">researcher 102-6</span>.</p>

                <p className="text-xs font-light whitewrap-nospace pb-4">researcher102-6@berkeley.edu</p>

                


                {/* Sign out button */}
                <div className="flex items-center justify-center py-[2px] px-4 space-x-1 hover:cursor-pointer hover:bg-custom-navbar" style={{ borderRadius: '8px', border: '1px solid #C1C1C1' }}>
                    <LogOut size={16} color="#6B6B6B" />
                    <p className="text-[#6B6B6B]">Sign Out</p>
                </div>
            </div>
        </div>
    )

}


export default MyProfile