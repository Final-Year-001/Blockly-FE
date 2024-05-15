
import image from '../../assets/home/future.png'
function InfoComp4() {


  const des = "There are more things to look farward to. We are constantly making Web Block Craft better just for you. If you like to help support us and test our application, Feel free to leave your email. We'll send you an email for beta testing."

  return (
    <div className="w-full mx-auto container">
      <div className='flex'>
        <div className='w-full flex justify-center'><img src={image} width={400} alt="image" /></div>
        <div className='w-full flex mr-24 flex items-center text-justify text-2xl'>
          {des}
        </div>
      </div>
      
     
    </div>
    );
}

export default InfoComp4;
