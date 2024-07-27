import React from 'react';

const StepIndicator: React.FC = () => {
  return (
    <div className="flex items-center mb-8 font-semibold">
      <div className="text-center">
        <div>1</div>
        <div>Business Info</div>
      </div>
      <div className="flex-1 border-t-2 border-gray-300 mx-5 md:mx-10 lg:mx-36"></div>
      <div className="text-center">
        <div>2</div>
        <div>Confirmation</div>
      </div>
    </div>
  );
};

export default StepIndicator;
