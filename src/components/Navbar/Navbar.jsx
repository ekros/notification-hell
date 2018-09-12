import React from "react";
import PropTypes from "prop-types";
import AirplaneMode from "../AirplaneMode/AirplaneMode.jsx";

import "./Navbar.css";

const Navbar = ({ airplaneModeOn, airplaneModeReady, onAirplaneModeClick, points }) => (
  <div className="navbar">
    <div className="points">{points}</div>
    <AirplaneMode style={{ display: "inline-block", float: "right", transform: "scale(0.9)" }}
      airplaneModeOn={airplaneModeOn} airplaneModeReady={airplaneModeReady} onClick={onAirplaneModeClick} />
  </div>
);

Navbar.propTypes = {
  airplaneModeOn: PropTypes.bool,
  airplaneModeReady: PropTypes.bool,
  onAirplaneModeClick: PropTypes.func,
  points: PropTypes.number,
};

Navbar.defaultProps = {
  points: 0
};

export default Navbar;
