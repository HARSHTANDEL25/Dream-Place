import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import OAuth from '../components/OAuth';


export default function SignUp() {
  const [FormData,setFormData]=useState({});
  const[error,setError]=useState(null);
  const[loading,setLoading]= useState(false);
  const navigate=useNavigate();

  //keep the user info and add new changes to the user info
  const handleChange =(e)=>{
    setFormData({
    ...FormData,
    [e.target.id]: e.target.value,

    });
    
  };

  const handlesubmit = async (e) =>{
    e.preventDefault();// prevent refresh when the user clicked on the submit 
    try {

      setLoading(true);
      const res = await fetch('api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(FormData)
      });
      const data=  await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      navigate('/sign-in');
      
    } catch (error) {
      setLoading(false);
      setError(error.message);      
  }
   
    
  };
 
  return (
     <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-center text-3xl my-7 font-semibold'>SignUp</h1>
      <form className='flex flex-col gap-4' onSubmit={handlesubmit}>
        <input type="text" placeholder='Username' className='border p-3 rounded-lg focus:outline-none focus:border-blue-500' 
        id='username' onChange={handleChange}/>
        <input type="email" placeholder='Email' className='border p-3 rounded-lg focus:outline-none focus:border-blue-500' 
        id='email'onChange={handleChange}/>
        <input type="password" placeholder='Password' className='border p-3 rounded-lg focus:outline-none focus:border-blue-500'
         id='password'onChange={handleChange}/>
        <button  disabled={loading} className='bg-slate-700  text-white p-3.5 rounded-lg uppercase  hover:opacity-95'>
             {loading ? 'Loading' : 'signup'}
          </button>
          <OAuth/>

      </form>
      <div className='flex gap-3 my-3'>
        <p>Have an account ?</p>
        <Link to={"/sign-in"}>
          <span className='text-blue-700 '>
            Sign-in
          </span>
        </Link>
      </div>
      {error  && <p className='text-red-600 mt-5'>{error}</p>}
    </div>
  );
}
