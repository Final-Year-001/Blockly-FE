import React, { useState } from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import undeDev from '../../assets/home/underDev.gif'

interface PricingPlan {
  title: string;
  price: number;
  period: string; // 'month' or 'year'
  features: string[];
}

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const plans: PricingPlan[] = [
    {
      title: 'Free',
      price: 0,
      period: 'month',
      features: ['One project space', 'Maximum 1 hour per day usage', 'One sandbox for backend builder' ,'Access to basic documentation'],
    },
    {
      title: 'Basic',
      price: isYearly ? 49.99 : 4.99,
      period: isYearly ? 'year' : 'month',
      features: ['25 Project space', 'No time restrictions', '3 sandbox for backend builder' , 'Access to basic documentation', 'Access to monthly guide books'],
    },
    {
      title: 'Pro',
      price: isYearly ? 99.99 : 9.99,
      period: isYearly ? 'year' : 'month',
      features: ['No limits to project spaces', 'No time restrictions', '10 sandbox for backend builder' , 'Access to basic documentation', 'Access to monthly guide books', 'AI Assistive chat' , ],
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto">
        <p className="text-3xl font-bold text-center mb-8">Pricing</p>
        <div className="flex justify-center gap-4 mb-10">
          <button
            className={`px-6 py-2 rounded-full ${!isYearly ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            className={`px-8 py-2 rounded-full ${isYearly ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {plans.map((plan) => (
            <div key={plan.title} className={`shadow-lg border-2 rounded-xl border-black
            ${plan.title === 'Free' ? 'bg-gradient-to-tr from-purple-100 to-blue-100'  : plan.title === 'Basic' ? 'bg-gradient-to-tr from-teal-100 to-lime-100' : 'bg-gradient-to-tr from-red-100 to-orange-100'}  rounded-lg  py-10 flex flex-col`}>
              <div className="flex-grow">
                <h3 className="text-4xl font-bold mb-4 text-center">{plan.title}</h3>
                <p className="text-indigo-600 text-2xl font-bold text-center pl-0 mb-4">
                  ${plan.price}/{plan.period}
                </p>
                <ul className="pl-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center mb-2">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center mt-4">
                <button
                  className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full"
                  onClick={() => setShowModal(true)}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-white max-w-md rounded-lg p-10 text-center ">
          <h2 className="text-2xl font-bold mb-4">Feature still under development</h2>
            <img src={undeDev} alt="under dev image" />
            <p className="text-gray-600 mb-6 pl-0">Plan selection is still unavailable as the app is under development. Currently all features are available in the free plan.</p>
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Pricing;
