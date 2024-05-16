import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TopBar from "./topBar";
import { FaArrowUp } from "react-icons/fa";
import Confetti from "react-dom-confetti";
import ProductLogoBW from "../../assets/LogoB&W";
import './jsstyles.css';
import { blocks, categoryDescriptions } from "./jsDocData";

const Badge = ({ title, image }) => (
  <div style={{ display: 'inline-block', marginRight: '10px' }}>
    <img src={image} alt={title} style={{ width: '50px', height: '50px' }} />
    <p>{title}</p>
  </div>
);

function JavascriptDoc() {
  const navigate = useNavigate();

  // Group blocks by category
  const groupedBlocks = blocks.reduce((acc, block) => {
    acc[block.category] = acc[block.category] || [];
    acc[block.category].push(block);
    return acc;
  }, {});

  const [showScroll, setShowScroll] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 250) {
        setShowScroll(true);
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 1000); 
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* <div id="TopBar">
        <TopBar />
      </div> */}
      {/* <div onClick={()=>navigate('/home')} className="cursor-pointer bg-blue-400 p-4 mb-6 flex justify-left">
        <ProductLogoBW />{" "}
      </div>  */}
      <TopBar onPage="documentation"/>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
      <h1>Javascript Blocks</h1> 
      </div>

      <div>
        {/* Render blocks for each category */}
        {Object.entries(groupedBlocks).map(([category, categoryBlocks], index) => (
          <div key={index} style={{ marginBottom: '30px', marginLeft: '20%' }}>
            <br/>
            <h2>{category}</h2>
            {/* Add a sentence about the type of blocks in the category */}
            {categoryDescriptions[category] && <p>{categoryDescriptions[category]}</p>}
            <br/>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
              {/* Map over the blocks in the category and render each one */}
              {categoryBlocks.map((block:any, index:any) => (
                <div key={index} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                  <div style={{ width: block.maxWidth?.description || '50%', marginRight: '20px' }}>
                    <h3>{index + 1}. {block.title}</h3>
                    <p>{block.description}</p><br/>
                  </div>
                  <img src={block.image} alt={`image`} style={{ maxWidth: block.maxWidth?.image || '50%', height: 'auto', border: '2px solid #A9A9A9'}} />
                </div>
              ))}
            </div> 
            <hr style={{ border: '1px solid #ddd', width: '85%', margin: '20px 5px 20px 5px' }} />
          </div>
        ))}
      </div>

      {/* Feedback System with Badges */}
      <h3 className="badheh3">Your Badges</h3>
      <div className="feedback-container">
    
        <div className="kid-animation">
          <img src="/img/js.gif" alt="Kid Animation" style={{ maxWidth: '250px', maxHeight: '200px' }} />
          <p className="caption" style={{ marginTop: '10px' }}>JavaScript Basics</p>
        </div>
        <div className="kid-animation">
          <img src="/img/Award.gif" alt="Kid Animation" style={{ maxWidth: '250px', maxHeight: '180px' }} />
          <p className="caption" style={{ marginTop: '28px' }}> Completion Reward</p>
        </div>
        
      </div>

      <Confetti active={showConfetti} 
      config={{
        angle: 90,
        spread: 75,
        startVelocity: 45,
        elementCount: 80, // Adjust the number of confetti particles
        dragFriction: 0.1,
        duration: 2000,
        stagger: 3,
        width: '10px',
        height: '10px',
        colors: ['#FF0000', '#00FF00', '#0000FF', '#FFA500', '#FFC0CB', '#FFD700', '#00FFFF', '#FF69B4', '#FFFF00']
      }} />
      
      {showScroll && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            backgroundColor: "black", 
            color: "white",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <FaArrowUp size={20} />
        </div>
      )}

       {/* footer */}
       <div className="mt-10 bg-blue-600 p-8 flex justify-center w-full">
        <p className="text-center text-white">
        © WebBlockCraft, 2024. All rights reserved.
        </p>
      </div> 

    </div>
  );
}

export default JavascriptDoc;
