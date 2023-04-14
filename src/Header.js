import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase'

const Header = () => {
  const [{ basket, user }] = useStateValue();
  // console.log(basket);
  const login = () => {
    if (user) {
      auth.signOut()
    }
  }
  return (
    <nav className='header'>
      <Link to="/">
        <img className='header__logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className='header__SearchIcon' />
      </div>
      {/* 3 links */}
      <div className="header__nav">
        {/* 1 link */}
        <Link to={!user && '/login'} className='header__link'>
          <div className="header__option" onClick={login}>
            <span className='header__option1'>Hello,{user && user.email}</span>
            <span className='header__option2'>{user ? "Sign Out" : "Sign In"}</span>
          </div>
        </Link>

        {/* 2 link */}
        <Link to='/login' className='header__link'>
          <div className="header__option">
            <span className='header__option1'>Returns</span>
            <span className='header__option2'>& Orders</span>
          </div>
        </Link>

        {/* 3 link */}
        <Link to='/login' className='header__link'>
          <div className="header__option">
            <span className='header__option1'>Your</span>
            <span className='header__option2'>Prime</span>
          </div>
        </Link>

        {/* store icon */}
        <Link to='/checkout' className='header__link'>
          <div className="header__basketin">
            {/* icon */}
            <ShoppingCartOutlinedIcon className='header__basketin1' />
            {/* item counter */}
            <span className='header__basketin2'>{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header