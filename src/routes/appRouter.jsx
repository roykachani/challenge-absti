import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import AddUsers from '../pages/addUser';

import Home from '../pages/home';
import Users from '../pages/users';

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/addUsers" element={<AddUsers />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
