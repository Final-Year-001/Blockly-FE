import noDataImage from "../../../assets/gettingStarted/noData.png";

const cardDesign = "rounded-xl shadow  text-xl mb-10 p-4";
const cardColor = "bg-gray-100 shadow";
const steps =
  "Oh My... This is embarassing. it seems like someone ate all the instructions related to connecting frontend to the backend . Dont worry we will get them back to you ASAP.";

function ConnectingFEBE() {
  return (
    <div className={` ${cardDesign} ${cardColor}`}>
      <div className="flex items-center ">
        <div className="w-3/12">
          <img src={noDataImage} width={350} alt="noDataImage" />
        </div>
        <div className="w-9/12  mr-10">{steps}</div>
      </div>
    </div>
  );
}

export default ConnectingFEBE;
