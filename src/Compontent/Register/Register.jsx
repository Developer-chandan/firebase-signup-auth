import React from 'react';

const Register = () => {
    return (
        <div>
               <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-left text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Your email"
            />
          </div>
          <div>
            <label htmlFor="password" className="text-left block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Your password"
            />
          </div>
          <div>
            <label htmlFor="confirmPassword" className="text-left block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="mt-1 p-2 w-full rounded-md border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200"
              placeholder="Confirm password"
            />
          </div>
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-200"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4">
            <p className="text-center text-gray-500">Or log in with</p>
            <div className="flex justify-center mt-2 space-x-2">
              <button className=" text-white p-2   transition duration-300">
              <img className="w-[50px] h-[50px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnw_uBqjQDj4hLr5NRakpD2MOlqALQZHVNrxnsk3jZbKF8Ltd9aTU1OAeW_RaQSUvXoM8&usqp=CAU" alt="" />
              </button>
              <button className=" text-white p-2  transition duration-300">
                <img className="w-[50px] h-[50px] rounded-full"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSevjLMoY69RrmdOeKZONLsRySpvdkEwP-SaraZ3hc_8WFS0eR1ALIIL9xuP2_nWbRnawY&usqp=CAU" alt="" />
              </button>
              <button className=" text-white p-2  transition duration-300">
              <img className="w-[50px] h-[50px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs2BR3DOwlpXs4PhCvYWk7WsNZYKZ8PLvGj-VkngNxgELCcRsmCyLAhCAstlTZqBwBZIY&usqp=CAU" alt="" />
              </button>
            </div>
          </div>
      </div>
    </div>
        </div>
    );
};

export default Register;