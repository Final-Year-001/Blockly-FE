import BWImage from './logoTrans.png'

const defailtText = 3;

const ProductLogoBW = ({ TextSize = defailtText }) => {
  const ImageSize = TextSize * 10 + 10;
  return (
    <div>
      <span className="flex">
        <div className="pr-2 pl-2 flex items-center">
          <img
            src={BWImage}
            width={ImageSize}
            alt="logo"
            className="inline-block"
          />
        </div>
        <div></div>
        <div className={`text-${TextSize}xl flex items-center font-bold `}>
          <div style={{color:"black"}}>WebBlockCraft</div>
        </div>
      </span>
    </div>
  );
};

export default ProductLogoBW;
