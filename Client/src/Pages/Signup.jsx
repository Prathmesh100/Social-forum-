import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';



const signup = import.meta.env.VITE_API_URL + '/signup'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [lastName, setLastName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await axios.post(signup, {
        email,
        password,
        lastName,
        firstName,
        confirmPassword
      });


      // Save the token in localStorage or a secure cookie
      toast.success('Signup successfull')
      navigate('/login')
    } catch (error) {
      console.error('Signup failed', error);
      toast.error('Signup failed', error)
    }
  };

  return (
    <div className='bg-gradient-to-r from-purple-500 to-voilet-500 min-h-screen flex items-center justify-center flex-col'>
      <div className='p-4 bg-white rounded-md min-h-[380px] w-[300px]'>
        <h2 className='font-[600] text-[35px] text-center mb-[20px]'>Signup</h2>
        <form onSubmit={handleSignup} className='flex flex-col gap-3'>
          <div >
            <label className='block text-[14px] font-[400]' htmlFor='firstName' >
              First name
            </label>
            <input
              type="text"
              value={firstName}
              id='firstName'
              className='p-1.5 rounded-md shadow-lg bg-purple-200 outline-none focus:border-blue-600 focus:border-2 w-full'
              onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div >
            <label className='block text-[14px] font-[400]' htmlFor='lastName' >
              Last name
            </label>
            <input
              type="text"
              value={lastName}
              id='firstName'
              className='p-1.5 rounded-md shadow-lg bg-purple-200 outline-none focus:border-blue-600 focus:border-2 w-full'
              onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div >
            <label className='block text-[14px] font-[400]' htmlFor='email' >
              Email
            </label>
            <input
              type="email"
              value={email}
              id='email'
              className='p-1.5 rounded-md shadow-lg bg-purple-200 outline-none focus:border-blue-600 focus:border-2 w-full'
              onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label className='block text-[14px] font-[400]' htmlFor='password'>
              Password
            </label>
            <input
              type="password"
              value={password}
              id='password'
              className='p-1.5 rounded-md shadow-lg bg-purple-200 outline-none focus:border-blue-600 focus:border-2 w-full'
              onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <label className='block text-[14px] font-[400]' htmlFor='confirmPassword'>
              Confirm Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              id='confirmPassword'
              className='p-1.5 rounded-md shadow-lg bg-purple-200 outline-none focus:border-blue-600 focus:border-2 w-full'
              onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <br />
          <button
            type="submit"
            className='p-2 bg-purple-700 rounded-md hover:bg-purple-400 text-white'>Signup</button>
        </form>
        <p className='text-[14px] mt-[40px]'>Already a user, <Link to='/login' className='text-blue-700 text-[14px]'>Login</Link></p>
      </div>
    </div>
  );
};

export default Signup;
