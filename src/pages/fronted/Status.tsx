import { useEffect, useState } from "react";
import save from '../../assets/statusImages/save.gif';
import book from '../../assets/statusImages/book.gif'
import clock from '../../assets/statusImages/clock.gif'

function StatusNoti({ message, mode }: { message: string, mode?: string }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setShow(true);
    const timeoutId = setTimeout(() => {
      setShow(false);
    }, 5000);
    return () => clearTimeout(timeoutId);
  }, [message]);

  return (
    <div>
      {show && (
        <div className="fixed bottom-4 left-3 shadow-md z-[9999] border-2 border-gray-900 ">
          <div className="flex items-center h-full bg-white">
            
            <div className={`p-3 text-white ${(message === "New unsaved changes" ) || (mode == "pending")? 'bg-amber-500' : (message === "All changes are saved." || (mode == "success")) ? 'bg-green-400' : 'bg-amber-500'}`}>
              {message}
            </div>

          

            <div className="px-3">
              <img src={message === "All changes are saved." ? save : message === "New unsaved changes." ? book : clock } alt="Save GIF"  style={{ width: "40px", height: "40px" }} />
            </div> 
          
          </div>
        </div>
      )}
    </div>
  );
}

export default StatusNoti;
