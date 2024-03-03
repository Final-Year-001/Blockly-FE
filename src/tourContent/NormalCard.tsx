import React from 'react';

interface Props {
  title: string;
  imageUrl: string;
  description: string;
  size: string;
}

const NormalCard: React.FC<Props> = ({ title, imageUrl, description, size }) => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <img src={imageUrl} alt={title} className="rounded-lg mb-4" style={{ maxWidth: size }} />
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default NormalCard;
