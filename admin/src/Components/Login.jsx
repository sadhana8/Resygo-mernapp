import React, { useState } from 'react';
import { backendUrl } from '../App';
import toast from 'react-toastify'

const Login = ({setToken}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const OnSubmitHandler = async (e) => {
      try{
        e.preventDefault();
        // eslint-disable-next-line no-undef
        const response = await axios.post(backendUrl + '/api/user/admin', { email,password})
        if(response.data.success){
          console.lof(response);
          setToken(response.data.token)
        }
        else{
          toast.error(response.data.message)
        }
      }catch (error) {
        console.log(error);
      }
    }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Admin Login
        </h1>
        <form className="space-y-5" onSubmit={OnSubmitHandler}>
          <div>
            <p className="text-gray-700 font-medium mb-1">Email Address</p>
            <input
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <div>
            <p className="text-gray-700 font-medium mb-1">Password</p>
            <input
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 text-lg font-bold bg-amber-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
