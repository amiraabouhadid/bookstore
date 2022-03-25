import React from 'react';
import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const links = [
    { id: 1, path: '/books', text: 'Books' },
    { id: 2, path: '/categories', text: 'Categories' },
  ];
  return (
    <div className="container-fluid bg-white p-3 ">
      <div className="row bg-white">
        <div className="col-8 bg-white">
          <div className="row bg-white">
            <h1 className="bg-white text-primary col-6"> Bookstore CMS</h1>
            <div className="col-3 mt-2 bg-white d-flex justify-content-between">
              {links.map((link) => (
                <NavLink
                  style={{ textDecoration: 'none' }}
                  key={link.id}
                  to={link.path}
                  className="bg-white px-3 text-dark"
                >
                  {link.text.toUpperCase()}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="col-4 bg-white d-flex justify-content-end">
          <p className="bg-white">
            <ImUser
              style={{ padding: '0.875rem' }}
              color="blue"
              size="2.813rem"
              className="border rounded-circle bg-white"
            />
          </p>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
