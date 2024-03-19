import { useState, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import TopBar from "./topBar";
import { FaArrowUp } from "react-icons/fa";
import { AwesomeButton } from 'react-awesome-button';

function GetStartedPage() {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
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
    <div className="px-10">

      <div id="TopBar">
        <TopBar />
      </div>

     <div className="flex justify-between items-center">
        <div> <br/>
          <Typography variant="h3">Get Started</Typography>
          <h1 style={{ color: 'red', fontWeight: 'bold' }}>COMPLETE THIS PAGEEEE</h1>
        </div>
      </div>
     
      <div className="my-8">
        <Typography variant="h4">Overview</Typography>
        <p>
          Welcome to Web Block Craft, a Google Blockly framework-based application
          designed to teach web programming to children and beginners. Web Block Craft
          allows you to create both frontend and backend development projects
          separately and connect them through a URL.
        </p>
      </div> <hr/>

      <div className="my-8">
        <Typography variant="h4">Getting Started with Web Block Craft</Typography>
        <p>
          To start with development, follow these steps:
        </p>
          <ol>
            <li>Create a new project using the "New Project" button.</li>
            <li>Give a project name.</li>
            <li>Choose which type of a project you want to create, Backend or Frontend and click on the "Go" button.</li>
          </ol>
        
      </div> <hr/>

      <div className="my-8">
        <Typography variant="h4">Getting Started with Frontend</Typography> <br/>
        <div style={{ display: 'flex', gap: '10px' }}>
          
          <AwesomeButton 
        style={{ 
          '--button-primary-color': '#33cc33',
          '--button-primary-color-dark': '#18a418',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#33cc33',
          '--button-primary-color-active': '#1aa81a',
          '--button-default-border-radius': '8px',
           width: '140px',
           height: '37px',   
           marginRight: '10px'        
        }} 
        href={'/doc-html'}
        type="primary">
          HTML Tutorials
        </AwesomeButton>

        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#4682B4',
          '--button-primary-color-dark': '#008080',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#4682B4',
          '--button-primary-color-active': '#2d82c7',
          '--button-default-border-radius': '8px',
           width: '140px',
           height: '37px',
           marginRight: '10px' 
        }} 
        href={'/doc-css'}
        type="primary">
          CSS Tutorials
        </AwesomeButton>

          <AwesomeButton 
        style={{ 
          '--button-primary-color': '#FFA726',
          '--button-primary-color-dark': '#e29520',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#ffb03a',
          '--button-primary-color-active': '#e29520',
          '--button-default-border-radius': '8px',
          width: '180px',
          height: '37px',
          marginRight: '10px' 
        }} 
        href={'/doc-js'}
        type="primary">
          JavaScript Tutorials
        </AwesomeButton>
        </div>
      </div> <hr/>

      <div className="my-8">
        <Typography variant="h4">Getting Started with Backend</Typography><br/>
        <div style={{ display: 'flex', gap: '10px' }}>

        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#33cc33',
          '--button-primary-color-dark': '#18a418',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#33cc33',
          '--button-primary-color-active': '#1aa81a',
          '--button-default-border-radius': '8px',
           width: '220px',
           height: '37px',   
           marginRight: '10px'        
        }} 
        href={'/#'}
        type="primary">
          Server Creation Tutorials
        </AwesomeButton>

        <AwesomeButton 
        style={{ 
          '--button-primary-color': '#4682B4',
          '--button-primary-color-dark': '#008080',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#4682B4',
          '--button-primary-color-active': '#2d82c7',
          '--button-default-border-radius': '8px',
           width: '220px',
           height: '37px',
           marginRight: '10px' 
        }} 
        href={'/#'}
        type="primary">
          API Handling Tutorials
        </AwesomeButton>

          <AwesomeButton 
        style={{ 
          '--button-primary-color': '#FFA726',
          '--button-primary-color-dark': '#e29520',
          '--button-primary-color-light': '#ffffff',
          '--button-primary-color-hover': '#ffb03a',
          '--button-primary-color-active': '#e29520',
          '--button-default-border-radius': '8px',
          width: '240px',
          height: '37px',
          marginRight: '10px' 
        }} 
        href={'/#'}
        type="primary">
          Database Handling Tutorials
        </AwesomeButton>

        </div>
      </div> <hr/>

      <div className="my-8">
        <Typography variant="h4">Connecting Frontend and Backend</Typography>
        <p>
          To connect your frontend and backend projects, use the following steps:
        </p>
      </div> <br/>

      {showScroll && (
        <div
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            cursor: "pointer",
            backgroundColor: "#FFBF00",
            color: "white",
            padding: "10px",
            borderRadius: "50%",
          }}
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </div>
  );
}

export default GetStartedPage;
