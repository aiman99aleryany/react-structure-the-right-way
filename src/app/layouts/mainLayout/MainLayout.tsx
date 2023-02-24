import { Outlet } from 'react-router-dom';
import HeaderLayout from '../headerLayout/HeaderLayout';
import FooterLayout from '../footerLayout/FooterLayout';

// for now we will just put the outlet, later you can add anything you want to represent with the the routes

function MainLayout() {
    return (
        <>
            <header>
                <HeaderLayout />
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <FooterLayout />
            </footer>
        </>
    );
}

export default MainLayout;
