import ProductLogo from "../../assets/Logo";
import WelcomeCard from "../../tourContent/Welcome";
import NormalCard from "../../tourContent/NormalCard";
import DownImg from "../../assets/tourImages/dlo.png"
import BlockImg from "../../assets/tourImages/block.png"
import WsImg from "../../assets/tourImages/ws.png"
import outputImg from "../../assets/tourImages/output2.png"
import codePng from "../../assets/tourImages/code.png"
import consPng from "../../assets/tourImages/cons.png"
import outPng from "../../assets/tourImages/out.png"
import EndImg from "../../assets/tourImages/end.png"

export const TourSteps = [
    {
      selector: '',
      content: <WelcomeCard />
    },
    {
      selector: '#TopBar',
      content: <NormalCard title={'This is the top bar'} imageUrl={DownImg} description={'This is the top bar. You can download your creation from here.'} size={'200px'} />
    },
    {
      selector: '.blocklyToolboxDiv',
      content: <NormalCard title={'Block Inventory'} imageUrl={BlockImg} description={'You can find many blocks to play with from here.'} size={'200px'} />
    },
    {
      selector: '.blocklyMainBackground',
      content: <NormalCard title={'Playground'} imageUrl={WsImg} description={'This is where you get to play with your blocks drag and drop and snap and build. Your imagination is your limit. '} size={'200px'} />
    },
    {
      selector: '#outputSection',
      content: <NormalCard title={'See what you did'} imageUrl={outPng} description={'This area will show the result of your block creation.'} size={'200px'} />
    },
    {
      selector: '#TabBtnCode',
      content: <NormalCard title={'See the code'} imageUrl={codePng} description={'You can see the actual code that you made using blocks This is the heart of your creation.'} size={'200px'} />
    },
    {
      selector: '#TabBtnIFrame',
      content: <NormalCard title={'Look what you made'} imageUrl={outputImg} description={'Check out your cool website from this place.'} size={'200px'} />
    },
    {
      selector: '#TabBtnConsole',
      content: <NormalCard title={'Console area'} imageUrl={consPng} description={'You get to see other information of you website here.'} size={'200px'} />
    },
    {
      selector: '',
      content: <NormalCard title={'Lets Go Make stuff'} imageUrl={EndImg} description={'Now you know where things are around here. Lets get building stuff!'} size={'200px'} />
    },
  ];