import {FaSearch} from 'react-icons/fa';
import { Link ,useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';



export default function Header() {
    const { currentUser } = useSelector((state) => state.user);
    const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [location.search]);

  return (
    <header className='bg-gradient-to-r bg-slate-700 text-white py-3'> 
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3.5">
            <Link to='/'>
        <h1 className='font-bold text-sm sm:text-xl'>
            <span className="text-xl font-bold">DREAM</span>
            <span className="text-yellow-300">Estate</span>
        </h1>
        </Link>
        <form onSubmit={handleSubmit} className='bg-slate-100 p-3 rounded-lg flex items-center' > 
            <input type='text' placeholder='Search Here' 
            className='bg-transparent focus:outline-none w-24 sm:w-64 text-black '
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            />
             <button>
            <FaSearch className='text-slate-600' />
          </button>
        </form>
        <ul className='flex gap-4 '>
        {/* make this hidden but in small size or above make it inline */}

        <Link to='/'>
            <li className='hidden sm:inline text-white hover:underline' >HOME</li>  
            </Link>

        <Link to='/search'>
            <li className='hidden sm:inline text-white hover:underline' >LISTING</li>  
            </Link>
            <Link to='/agent'>
            <li className='hidden sm:inline text-white hover:underline'>AGENT</li>
            
            </Link>
            <Link to='/about'>
            <li className='hidden sm:inline text-white hover:underline'>ABOUT</li>
            
            </Link>
            
            
            <Link to='/profile'>
            {currentUser ? (
              <img
              className='rounded-full h-7 w-7 object-cover'
              src={currentUser.avatar}
              alt='profile'
            />
            ) : (
              <li className=' text-white hover:underline'> Sign in</li>
            )}
          </Link>



        </ul>
        </div>



    </header>
  )
}
