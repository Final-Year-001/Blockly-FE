import React from 'react';
import TopBar from '../documents/topBar';
import bgImage from '../../assets/home/pattWhite.png';
import pdf1 from '../../assets/pdfs/WebBlockCraft Guide Book.pdf'
import pdf1img from '../../assets/pdfs/Screenshot 2024-08-03 021214.png'
import pdf2img from '../../assets/pdfs/Screenshot 2024-08s-03 021214.png'

type GuidebookCardProps = {
  title: string;
  imageUrl: string;
  pdfUrl: string;
  desc: string
};

const GuidebookCard: React.FC<GuidebookCardProps> = ({ title, imageUrl, pdfUrl, desc }) => {
  return (
    <div className="max-w-sm w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
      <img className="w-full  object-cover" src={imageUrl} alt={`${title} cover`} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">{title}</div>
        <div className=''>{desc}</div>
        <a
          href={pdfUrl}
          download
          className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-2 px-4 rounded-full mt-4 transition-colors duration-300"
        >
          Download
        </a>
      </div>
    </div>
  );
};

const GuidebookList: React.FC = () => {
  const guidebooks = [
    {
      title: 'Guidebook 1',
      desc : 'How to make a simple Todo list application',
      imageUrl: pdf1img,
      pdfUrl: pdf1,
    },
    {
      title: 'Guidebook 2',
      imageUrl: pdf2img,
      desc : 'How to make a simple backend server - demo file',
      pdfUrl: pdf1,
    },
    {
        title: 'Guidebook 2',
        imageUrl: pdf2img,
        desc : 'How to make a simple backend server - demo file',
        pdfUrl: pdf1,
      },
      {
        title: 'Guidebook 2',
        imageUrl: pdf2img,
        desc : 'How to make a simple backend server - demo file',
        pdfUrl: pdf1,
      },
  ];

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-cover  bg-[length:80%] flex flex-col items-center"
    >
      <TopBar onPage="getStarted" />
      <h1 className="text-4xl text-gray-900 mt-8">Our Guidebooks</h1>
      <p className="text-lg text-gray-700 mb-8">Click on a guidebook to download it</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 p-6">
        {guidebooks.map((guidebook, index) => (
          <GuidebookCard
            key={index}
            title={guidebook.title}
            desc={guidebook.desc}
            imageUrl={guidebook.imageUrl}
            pdfUrl={guidebook.pdfUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default GuidebookList;
