// src/components/Login.tsx
import React from 'react';

const Login: React.FC = () => {

 

  

  return (
    <div className='mt-40 ml-96'>
      <div className="max-w-l w-full space-y-8 p-8 bg-gray-100 rounded-lg shadow-lg ">
        <h2 className="text-xl font-semibold ">Fill out the form</h2>
        <div style={{marginTop:"0px"}}>Our team will touch base with you within 24 hours</div>
        <form className="space-y-4">
  <div className="flex space-x-4">
    <div className="w-1/2">
      <label  className="block font-medium">
      Full Name*
      </label>
      <input
        type="text"
      
        className="w-full border-b border-black  outline-none bg-gray-100 "
        required
      />
    </div>
    <div className="w-1/2">
      <label  className="block font-medium">
        Email ID*
      </label>
      <input
        type="text"
        
        className="w-full border-b border-black  outline-none bg-gray-100 "
        required
      />
    </div>
    
  </div>

  <div className="flex space-x-4">
    <div className="w-1/2">
      <label  className="block font-medium">
        Country
      </label>
      <input
        type="text"
       
        className="w-full border-b border-black  outline-none bg-gray-100 "
        required
      />
    </div>
    <div className="w-1/2">
      <label className="block font-medium">
        Contact Number
      </label>
      <input
        type="text"
  
        className="w-full border-b border-black  outline-none bg-gray-100 "
        required
      />
    </div>
    
  </div>
  <div className="w-full">
      <label className="block font-medium">
        Tell us your requirements*
      </label>
      <input
        type="text"
  
        className="w-full border-b border-black  outline-none bg-gray-100 "
        required
      />
    </div>
  <div>
    <button
      type="submit"
      className="w-1/2 py-2 px-4 bg-black hover:bg-black text-white rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Submit
    </button>
  </div>
</form>
      </div>
    </div>
  );
};

export default Login;
