import { Route } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import { createRoutesFromElements } from 'react-router';
import MainLayout from 'app/layouts/mainLayout/MainLayout';
import Navigator from 'utils/components/Navigator';
import ProductsCollectionService from 'stack/product/services/ProductsCollectionService';
import { ProductsCollection } from 'utils/types/productTypes';

// Home
import HomePage from 'app/features/home/pages/HomePage';

// Search
import SearchPage from 'app/features/search/pages/SearchPage';

// Cart
import CartPage from 'app/features/cart/pages/CartPage';

// Favorite
import FavoritePage from 'app/features/favorite/pages/FavoritePage';

// Profile
import ProfilePage from 'app/features/profile/pages/ProfilePage';

// Contact
import ContactPage from 'app/features/contact/pages/ContactPage';
import ContactForm from 'app/features/contact/components/contactForm/ContactForm';

// About
import AboutPage from 'app/features/about/pages/AboutPage';

// Signin
import SigninPage from 'app/features/signin/pages/SigninPage';

// Signout
import SignoutPage from 'app/features/signout/pages/SignoutPage';

// NoPage
import NoPage from 'app/features/noPage/pages/NoPage';

// TODO: Make sure to add the Profile, favorites, cart, Search Routes.

const AppRoutes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            {/* Home */}
            <Route
                index
                element={<HomePage />}
                loader={(): ProductsCollection =>
                    ProductsCollectionService.getAll()
                }
            />

            {/* Search */}
            <Route path="search" element={<SearchPage />}></Route>

            {/* Cart */}
            <Route path="cart" element={<CartPage />}></Route>

            {/* Favorite */}
            <Route path="favorite" element={<FavoritePage />}></Route>

            {/* Profile */}
            <Route path="profile" element={<ProfilePage />}></Route>

            {/* About */}
            <Route path="about" element={<AboutPage />}></Route>

            {/* Contact */}
            <Route path="contact" element={<ContactPage />}>
                <Route index element={<ContactForm />} />
            </Route>

            {/* Signin */}
            <Route path="signin" element={<SigninPage />}></Route>

            {/* Signout */}
            <Route path="signout" element={<SignoutPage />}></Route>

            {/* NoPage */}
            <Route path="nopage" element={<NoPage />}></Route>

            {/* Navigators */}
            <Route path="home" element={<Navigator pathname="/" />} />
            <Route path="*" element={<Navigator pathname="nopage" />} />
        </Route>
    )
);

export default AppRoutes;
