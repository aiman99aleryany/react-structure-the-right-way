import NavBar from './NavBar';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const whereNavIsNotVisible = ['/signin', '/signout', '/nopage'];

function HeaderLayout() {
    const { pathname } = useLocation();
    const [isNavVisible, setNavIsVisible] = useState(true);

    useEffect(() => {
        whereNavIsNotVisible.map(
            (path) => path === pathname && setNavIsVisible(false)
        );
    }, [pathname]);

    // add a button in the signin page to go back, because in phone there is no navbar to change routes
    return <nav className="headerLayout">{isNavVisible && <NavBar />}</nav>;
}

export default HeaderLayout;
