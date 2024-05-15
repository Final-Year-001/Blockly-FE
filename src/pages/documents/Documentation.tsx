import React, { useState } from 'react';

const SideBar: React.FC<{ collapsed: boolean }> = ({ collapsed }) => {
  return (
    <div className={`h-full w-64 bg-gray-800 text-white ${collapsed ? 'hidden' : 'block'}`}>
      {/* Sidebar content goes here */}
      Sidebar
    </div>
  );
};

const TopBar: React.FC = () => {
  return (
    <div className="h-16 bg-blue-500 text-white flex justify-between items-center px-4">
      {/* Top bar content goes here */}
      Top Bar
    </div>
  );
};

const DocumentationFile: React.FC = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar collapsed={isCollapsed} />
      <div className="flex flex-col w-full">
        <div className='w-full h-16 bg-blue-500 text-white flex justify-between items-center px-4'>
          ettst
          <button onClick={toggleSidebar} className="text-white bg-red-200">
            Toggle Sidebar
          </button>
        </div>
        <div className="p-4">
          shgsiuhj g kujsh dkjsh
        </div>
      </div>
    </div>
  );
};

export default DocumentationFile;
