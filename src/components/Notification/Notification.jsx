import React from "react";
import classnames from "classnames";
import PropTypes from "prop-types";
import { kind as notificationKind } from "../../constants.js";

import "./Notification.css";

const Notification = class Notification extends React.Component {
  static propTypes = {
    kind: PropTypes.number,
    index: PropTypes.number,
    onNotificationClick: PropTypes.func,
    selected: PropTypes.bool,
    title: PropTypes.string,
    text: PropTypes.string,
  };

  render() {
    const { kind, index, onNotificationClick, selected, title, text } = this.props;
    return (
      <div className={classnames("notification", { "notification--selected": selected,
        "notification--social": kind === notificationKind.SOCIAL,
        "notification--messaging": kind === notificationKind.MESSAGING, "notification--calendar": kind === notificationKind.CALENDAR,
        "notification--email": kind === notificationKind.EMAIL, "notification--system": kind === notificationKind.SYSTEM })}
        onClick={() => onNotificationClick(index) }>
        <div className={classnames("icon", { "icon--social": kind === notificationKind.SOCIAL,
        "icon--messaging": kind === notificationKind.MESSAGING, "icon--calendar": kind === notificationKind.CALENDAR,
        "icon--email": kind === notificationKind.EMAIL, "icon--system": kind === notificationKind.SYSTEM })}></div>
        <div className="notification__text">
          <div className="title">{title}</div>
          <div className="text">{text}</div>
        </div>
      </div>
    );
  }
};

export default Notification;
