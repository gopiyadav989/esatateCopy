import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import OAuth from '../components/OAuth';

export default function SignUp() {

  const [formData, setFormData] =useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
    
  };
  
  const handleSumbit = async (e)=>{
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError('Please fill in all fields');
      return;
    }
    // while hashing password bcryptjs sometimes hash the empty value and sometimes crashed the site,
    // thats why show all values, that are not filled through frontend,
    // getting error filed is not filled is ok for email and username but not for password

    setLoading(true);

    try{
      const res = await fetch('api/auth/signup',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      const data = await res.json();
      if(data.success == false){
        setError(data.message);
        setLoading(false);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in')
    }catch(e){
      setLoading(false);
      setError(e.message);
    }
    
  }

  return (
    <div className='p-3 max-w-lg mx-auto'>
      
      <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>

      <form onSubmit={handleSumbit}
        className='flex flex-col gap-4'> 
        <input type="text" placeholder='username' id='username' 
          onChange={handleChange}
          className='border p-3 rounded-lg' />
        <input type="email" placeholder='email' id='email' 
          onChange={handleChange}
          className='border p-3 rounded-lg' />
        <input type="password" placeholder='password' id='password' 
          onChange={handleChange}
          className='border p-3 rounded-lg' />
        <button disabled={loading}
        className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>{loading ? 'Loading....' : 'Sign Up'}</button>
        <OAuth />
      </form>

      <div className='flex gap-2 mt-5'>
        <p>have an account?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700'>Sign in</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p> }
    </div>
  )
}