const overview =
  "   Welcome to Web Block Craft, a Google Blockly framework-based application designed to teach web programming to children and beginners. Web Block Craft allows you to create both frontend and backend development projects separately and connect them through URL.";

const cardStyle='mb-24  rounded-xl py-14 p-8 shadow-md'
const cardColor = 'bg-gradient-to-br from-amber-100 to-amber-100'

function Overview() {
  return (
    <div>
      <div className="text-xl">
          <div className={`w-full ${cardStyle} ${cardColor} `}>
            <div className="text-2xl mb-2">Overview</div>
            <div className="text-justify flex">{overview}</div>
   
            <div className="text-2xl mt-16 mb-2">
              Getting Started with Web Block Craft
            </div>
            <div>
              <div>To start with development, follow these steps:</div>
              <div className="ml-10 mt-2">
                <div className="mb-2">
                  <span className="font-bold">Step 01 - </span>Create a new
                  project using the "New Project" button.
                </div>
                <div  className="mb-2">
                  <span className="font-bold">Step 02 - </span>Give a project
                  name.
                </div>
                <div>
                  <span className="font-bold">Step 03 - </span>
                  Choose which type of a project you want to create, Backend or
                  Frontend and click on the "Go" button.
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Overview;