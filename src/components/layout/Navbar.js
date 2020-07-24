import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Navbar = (props) => {
  const { title, icon } = props;
  return (
    <div>
      <div className="navbar bg-primary">
        <h1>
          <i className={icon} />
          {" " + title}
        </h1>
        <ul>
          <li>
            <Link to="/contact-manager">Home</Link>
          </li>
          <li>
            <Link to="/contact-manager/about">About app</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Contact Keeper",
  icon: "fas fa-id-card-alt",
};

export default Navbar;
