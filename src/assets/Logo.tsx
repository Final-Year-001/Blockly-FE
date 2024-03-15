import logoImage from "./logoTrans.png";

const defailtText = 3;

const ProductLogo = ({ TextSize = defailtText }) => {
  const ImageSize = TextSize * 10 + 10;
  return (
    <div>
      <span className="flex">
        <div className="pr-2 pl-2 flex items-center">
          <img
            src={logoImage}
            width={ImageSize}
            alt="logo"
            className="inline-block"
          />
        </div>
        <div></div>
        <div className={`text-${TextSize}xl flex items-center font-bold `}>
          <div className="text-red-400">Web</div>
          <div className="text-blue-400">Block</div>
          <div className="text-orange-400">Craft</div>
        </div>
      </span>
    </div>
  );
};

export default ProductLogo;
