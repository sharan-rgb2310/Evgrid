import React from 'react';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';
import carImage from '../images/aboutImg.png';

const WhyChooseUs = () => {
  const benefits = [
    "Experienced, time-served engineers",
    "Commitment to customer service",
    "Commitment to taking the stress out of your project.",
    "Flexible with any structure of the building"
  ];

  return (
    <section className="flex flex-col md:flex-row items-stretch w-full min-h-[600px] bg-white">
      
      {/* Left Content Column */}
      <div className="w-full md:w-1/2 px-6 py-12 md:p-16 lg:p-24 flex flex-col justify-center">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
            The advantage:<br />
            reasons to trust our<br />
            expertise
          </h2>

          <ul className="space-y-5 mb-10">
            {benefits.map((text, index) => (
              <li key={index} className="flex items-center gap-3">
                {/* Custom Green matching your "Get Started" button */}
                <CheckCircle2 className="text-[#5cb85c] w-6 h-6 flex-shrink-0" />
                <span className="text-gray-700 text-lg font-medium">{text}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-8">
            <button className="bg-[#5cb85c] hover:bg-[#4cae4c] text-white px-8 py-4 rounded-full flex items-center gap-2 font-bold transition-all shadow-lg hover:shadow-green-100">
              Get Started <ArrowUpRight size={20} />
            </button>
            
            <div className="flex items-center gap-2 text-lg">
              <span className="text-gray-500">or Call</span>
              <a href="tel:03504687212" className="text-[#5cb85c] font-bold hover:underline">
                03504 687 212
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Right Image Column - Refactored for Rounded Corners */}
      <div className="w-full md:w-1/2 p-4 md:p-6 lg:p-8"> 
        {/* container p-8 creates the spacing around the image to show the rounded edges */}
        <div className="relative w-full h-[400px] md:h-full overflow-hidden rounded-[40px] shadow-2xl">
          <img 
            src={carImage} 
            alt="Expertise presentation" 
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          
          {/* Subtle Overlay to make the image feel integrated */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;