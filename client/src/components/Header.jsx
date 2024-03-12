import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

export default function Header() {
  const {currentUser} = useSelector(state => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e)=> {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`);
  }

  useEffect(()=> {
    const urlParams = new URLSearchParams(location.search);
    const term = urlParams.get('searchTerm');
    if(term) {
      setSearchTerm(term);
    }
  }, [location.search]);

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="mx-auto flex items-center justify-between max-w-6xl p-3">

        <Link to="/">
          <h1 className="flex flex-wrap text-sm font-bold sm:text-xl">
            <span className="text-slate-500">बेच_    </span>
            <span>{" "}</span>
            <span className="text-slate-700">दो</span>
          </h1>
        </Link>

        <form onSubmit={handleSubmit}
          className="flex items-center rounded-lg bg-slate-100 p-3">
          <input
            type="text"
            placeholder="Search...."
            className="w-24 sm:w-64 bg-transparent focus:outline-none"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>

        <ul className="flex gap-4">
          <Link to="/liked-products">
            {currentUser ? <li className="hidden sm:inline text-slate-700 hover:underline ">Liked Products</li> : ""}
            
          </Link>

          <Link to="/About">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={'/profile'}>
            {currentUser ? (
              <img className="rounded-full h-7 w-7 object-cover" src={currentUser.avatar} alt="profile" />
            ) : (
              <li className="text-slate-700 hover:underline">Signin</li> 
            )}
          </Link>
        </ul>
        
      </div>
    </header>
  );
}