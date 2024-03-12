import { useEffect, useState } from "react";
import save from '../../assets/statusImages/save.gif';
import book from '../../assets/statusImages/book.gif'

function StatusNoti({ message }: { message: string }) {
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
        <div className="fixed bottom-4 left-4 shadow-md rounded-lg z-50">
          <div className="flex items-center h-full bg-white">
            
            <div className={`p-3 text-white ${message === "New unsaved changes" ? 'bg-amber-500' : message === "All changes are saved." ? 'bg-green-400' : 'bg-amber-500'}`}>
              {message}
            </div>

          

            <div className="px-3">
              <img src={message === "All changes are saved." ? save : book} alt="Save GIF"  style={{ width: "40px", height: "40px" }} />
            </div> 
          
          </div>
        </div>
      )}
    </div>
  );
}

export default StatusNoti;
