import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ProductLogo from "../../assets/Logo";

function GetStartedPage() {
  return (
    <div className="px-10">
     <div className="flex justify-between items-center">
        <div> <br/>
          <Typography variant="h1">Get Started with BLOCKME</Typography>
          <h1 style={{ color: 'red', fontWeight: 'bold' }}>COMPLETE THIS PAGEEEE</h1>
        </div>
        <div>
        <Link to="/">
          <ProductLogo />
          </Link>
        </div>
      </div>
     
      <div className="my-8">
        <Typography variant="h2">Overview</Typography>
        <p>
          Welcome to BLOCKME, a Google Blockly framework-based application
          designed to teach web programming to children and beginners. BlockMe
          allows you to create both frontend and backend development projects
          separately and connect them through a URL.
        </p>
      </div>

      <div className="my-8">
        <Typography variant="h2">Getting Started with Frontend</Typography>
        <p>
          To start with frontend development, follow these steps:
          <ol>
            <li>Create a new frontend project using the "New Project" button.</li>
          </ol>
        </p>
      </div>

      <div className="my-8">
        <Typography variant="h2">Getting Started with Backend</Typography>
        <p>
          To start with backend development, follow these steps:
          <ol>
            <li>Create a new backend project using the "New Project" button.</li>
          </ol>
        </p>
      </div>

      <div className="my-8">
        <Typography variant="h2">Connecting Frontend and Backend</Typography>
        <p>
          To connect your frontend and backend projects, use the following steps:
          <ol>
            <li>
              .....
            </li>
          </ol>
        </p>
      </div>

      <div className="mt-8">
        <Link to="/">
          <Button className="h-12 flex gap-3 justify-center items-center">
            Go Back to My Projects
          </Button>
        </Link> <br/>
      </div>
    </div>
  );
}

export default GetStartedPage;
