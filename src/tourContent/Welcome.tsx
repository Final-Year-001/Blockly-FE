import React from 'react';
import LogoText from '../assets/logoText.png'

const WelcomeCard: React.FC = () => {
  return (
    <div className={'bw-400px'}>
      <h1 className='text-center text-3xl pb-4'>Welcome to</h1>
      <div className="card">
      <img src={LogoText} alt={'welcome image'} className="card-image pb-6" />
      <div className="card-content">
        <p className="card-description text-xl text-blue-300 ">{'Hey curious friend, you ready to learn about WebBlockCraft where you are the master of your web universe!'}</p>
      </div>
    </div>
    </div>
  );
};

export default WelcomeCard;