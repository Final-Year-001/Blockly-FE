
import image from '../../assets/home/future.png'
function InfoComp4() {


  const des = "There are more things to look forward to. We are constantly improving Web Block Craft. If you like to support us and test our application, feel free to contact us via email. We'll contact you for beta testing."

  return (
    <div className="w-full mx-auto container">
      <div className='flex'>
        <div className='w-full flex justify-center'><img src={image} width={400} alt="image" /></div>
        <div className='w-full flex mr-24 flex items-center text-justify text-2xl'>
          {des} <br/><br/>Contact us via:webblockcraft@gmail.com
        </div>
      </div>
      
     
    </div>
    );
}

export default InfoComp4;
