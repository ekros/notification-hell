import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import "./AirplaneMode.css";

const AirplaneMode = class AirPlaneMode extends React.Component {
  static propTypes = {
    airplaneModeOn: PropTypes.boolean,
    airplaneModeReady: PropTypes.boolean,
    onClick: PropTypes.func,
    style: PropTypes.object
  };

  state = {
    cooldown: 59
  };

  componentWillReceiveProps(nextProps) {
    const { airplaneModeReady } = this.props;
    if (!nextProps.airplaneModeReady && airplaneModeReady) {
      this.cooldownInterval = setInterval(() => {
        const { cooldown } = this.state;
        if (cooldown === 0) {
          clearInterval(this.cooldownInterval);
          this.setState({ cooldown: 29 });
        } else {
          this.setState({ cooldown: cooldown - 1 });
        }
      }, 1000);
    }
  }
  render() {
    const {
      props: { airplaneModeOn, airplaneModeReady, onClick, style },
      state: { cooldown }
    } = this;
    return (
      <div style={style} onClick={onClick} className={classnames("airplane", { "on": airplaneModeOn }, { "not-ready": !airplaneModeReady })}>
        <div className="head"></div>
        <div className="body"></div>
        <div className="wings">
          <div className="left-wing"></div>
          <div className="right-wing"></div>
        </div>
        <div className="tail">
          <div className="left-tail"></div>
          <div className="right-tail"></div>
        </div>
        <div className="text">
          AIRPLANE MODE
        </div>
        {
          !airplaneModeReady ?
          <div className="cooldown-time">{cooldown}s</div> : null
          }
        </div>
    )
  }
};

export default AirplaneMode;
