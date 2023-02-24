import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiFillHome } from 'react-icons/ai';
import { RiSearchFill, RiSearchLine } from 'react-icons/ri';
import { MdShoppingCart, MdOutlineShoppingCart } from 'react-icons/md';
import { MdOutlineFavoriteBorder, MdOutlineFavorite } from 'react-icons/md';
import { HiOutlineUserCircle, HiUserCircle } from 'react-icons/hi';

import './NavBar.scss';

function NavBar() {
    const [isHome, setIsHome] = useState(false);
    const [isSearch, setIsSearch] = useState(false);
    const [isCart, setIsCart] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const [isUser, setIsUser] = useState(false);

    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === '/') switchToHome();
        if (pathname.startsWith('/search')) switchToSearch();
        if (pathname.startsWith('/cart')) switchToCart();
        if (pathname.startsWith('/favorite')) switchToFavorite();
        if (pathname.startsWith('/profile')) switchToUser();
    }, [pathname]);

    const switchToHome = () => {
        setIsHome(true);
        setIsSearch(false);
        setIsCart(false);
        setIsFavorite(false);
        setIsUser(false);
    };

    const switchToSearch = () => {
        setIsHome(false);
        setIsSearch(true);
        setIsCart(false);
        setIsFavorite(false);
        setIsUser(false);
    };

    const switchToCart = () => {
        setIsHome(false);
        setIsSearch(false);
        setIsCart(true);
        setIsFavorite(false);
        setIsUser(false);
    };

    const switchToFavorite = () => {
        setIsHome(false);
        setIsSearch(false);
        setIsCart(false);
        setIsFavorite(true);
        setIsUser(false);
    };

    const switchToUser = () => {
        setIsHome(false);
        setIsSearch(false);
        setIsCart(false);
        setIsFavorite(false);
        setIsUser(true);
    };

    return (
        <div className="navbar">
            <Link
                to={'profile'}
                className={`navbar-link ${isUser && 'navbar-link-active'}`}
                onClick={switchToUser}
            >
                {isUser ? (
                    <HiUserCircle
                        className="navbar-icon"
                        onClick={switchToUser}
                    />
                ) : (
                    <HiOutlineUserCircle
                        className="navbar-icon"
                        onClick={switchToUser}
                    />
                )}
            </Link>

            <Link
                to={'favorite'}
                className={`navbar-link ${isFavorite && 'navbar-link-active'}`}
                onClick={switchToFavorite}
            >
                {isFavorite ? (
                    <MdOutlineFavorite
                        className="navbar-icon"
                        onClick={switchToFavorite}
                    />
                ) : (
                    <MdOutlineFavoriteBorder
                        className="navbar-icon"
                        onClick={switchToFavorite}
                    />
                )}
            </Link>

            <Link
                to={'cart'}
                className={`navbar-link ${isCart && 'navbar-link-active'}`}
                onClick={switchToCart}
            >
                {isCart ? (
                    <MdShoppingCart
                        className="navbar-icon"
                        onClick={switchToCart}
                    />
                ) : (
                    <MdOutlineShoppingCart
                        className="navbar-icon"
                        onClick={switchToCart}
                    />
                )}
            </Link>

            <Link
                to={'search'}
                className={`navbar-link ${isSearch && 'navbar-link-active'}`}
                onClick={switchToSearch}
            >
                {isSearch ? (
                    <RiSearchFill
                        className="navbar-icon"
                        onClick={switchToSearch}
                    />
                ) : (
                    <RiSearchLine
                        className="navbar-icon"
                        onClick={switchToSearch}
                    />
                )}
            </Link>

            <Link
                to={'/'}
                className={`navbar-link ${isHome && 'navbar-link-active'}`}
                onClick={switchToHome}
            >
                {isHome ? (
                    <AiFillHome
                        className="navbar-icon"
                        onClick={switchToHome}
                    />
                ) : (
                    <AiOutlineHome
                        className="navbar-icon"
                        onClick={switchToHome}
                    />
                )}
            </Link>
        </div>
    );
}

export default NavBar;
