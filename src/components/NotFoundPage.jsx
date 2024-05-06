import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const NotFoundPage = () => {
  return (
    <div>
      <NavBar />
      <section>
        <h1>404 Not Found</h1>
      </section>
    </div>
  );
};

export default NotFoundPage;
