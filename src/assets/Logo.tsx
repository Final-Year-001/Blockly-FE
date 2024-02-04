import logoImage from './logo.png'


const defailtText = 3;

const ProductLogo = ({TextSize = defailtText}) => {
const ImageSize = TextSize * 10 + 10;
  return (
    <div>
    <span className="flex">
        <div className='pr-2 pl-2 flex items-center'>
            <img src={logoImage} width={ImageSize} alt="logo" className="inline-block" />
        </div>
        <div>
        </div>
        <div className={`text-${TextSize}xl flex items-center font-bold `}>
            <span className="text-red-400">B</span>
            <span className="text-blue-400">L</span>
            <span className="text-orange-400">O</span>
            <span className="text-green-400">C</span>
            <span className="text-purple-300">K</span>
            <span>ME </span>
        </div> 
        </span>
    </div>
  );
};

export default ProductLogo;