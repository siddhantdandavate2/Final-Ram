import React from 'react';
import { ClipLoader } from 'react-spinners';

const Loader = ({ loading = true, size = 50 }) => {
  return (
    <div 
      className={`fixed inset-0 bg-white bg-opacity-95 flex items-center justify-center z-50 transition-all duration-500 ease-in-out ${
        loading 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible'
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className={`transition-all duration-300 ease-in-out ${
          loading ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
        }`}>
          <ClipLoader
            color="#40E0D0"
            loading={true}
            size={size}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={0.8}
          />
        </div>
        <div className={`text-center transition-all duration-300 ease-in-out delay-100 ${
          loading ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
        }`}>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            <span className="text-primary">Maxcare</span> Pain Clinic
          </h3>
          <p className="text-gray-600 text-sm animate-pulse">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loader;