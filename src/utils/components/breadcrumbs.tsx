import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();

  // Split the current path into parts (ignoring the first empty segment)
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {/* Iterate over the pathnames to generate breadcrumb links */}
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;

          // If it's the last item in the path, don't link it (it's the current page)
          return index === pathnames.length - 1 ? (
            <li key={to} className="breadcrumb-item active" aria-current="page">
              {value}
            </li>
          ) : (
            <li key={to} className="breadcrumb-item">
              <Link to={to}>{value}</Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
