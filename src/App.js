import React, { Component } from 'react';
import _ from "lodash";
import Navbar from "./components/Navbar/Navbar.jsx";
import Notification from "./components/Notification/Notification.jsx";
import { kind, gameState } from "./constants.js";
import allNotifications from "./allNotifications.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.tickInterval = 3000;
    this.ticksBeforeSpeedChange = 5;
  }

  state = {
    airplaneModeOn: false,
    airplaneModeReady: true,
    notifications : allNotifications.slice(0, 3),
    state: gameState.TUTORIAL1,
    tickCount: 0,
    points: 0,
  };

  addPoints = () => {
    this.setState({ points: this.state.points + 100 });
  }

  onAirplaneModeClick = () => {
    const { airplaneModeOn, airplaneModeReady } = this.state;
    if (!airplaneModeOn && airplaneModeReady) {
      setTimeout(() => {
        this.setState({ airplaneModeOn: false, airplaneModeReady: false });
        setTimeout(() => {
          this.setState({ airplaneModeReady: true });
        }, 60000);
      }, 8000);
      this.setState({ airplaneModeOn: true });
    }
  }

  onNotificationClick = index => {
    const { state, notifications } = this.state;
    if (state === gameState.PLAYING || state === gameState.TUTORIAL1 || state === gameState.TUTORIAL2) {
      const nMatchBefore = notifications.filter(n => n.selected);
      const kind = notifications[index].kind;
      if (!nMatchBefore || !nMatchBefore.length || kind === nMatchBefore[0].kind) {
        const newNotifications = _.cloneDeep(notifications);
        newNotifications[index].selected = !newNotifications[index].selected;
        this.setState({ notifications: newNotifications });
        const nMatch = newNotifications.filter(n => n.selected);
        if (nMatch && nMatch.length >= 3 && !_.some(nMatch, n => n.kind !== nMatch[0].kind)) {
          this.removeNotifications(nMatch);
          this.addPoints();
          if (state === gameState.TUTORIAL1) {
            this.startTutorial2();
          } else if (state === gameState.TUTORIAL2) {
            this.startHell();
          }
        }
      }
    }
  };

  removeNotifications = removedNotifications => {
    const { notifications } = this.state;
    const newNotifications = _.reject(notifications, n => removedNotifications.find(r => r.id === n.id));
    this.setState({ notifications: newNotifications });
  };

  resetGame = () => {
    this.tickInterval = 3000;
    this.ticksBeforeSpeedChange = 5;
    this.setState({
      airplaneModeOn: false,
      airplaneModeReady: true,
      notifications : _.shuffle(allNotifications).filter(n => n.id >= 10).slice(0, 5),
      state: gameState.PLAYING,
      tickCount: 0,
      points: 0,
    }, () => { this.startHell() });
  };

  startHell = () => {
    this.setState({ state: gameState.PLAYING });
    this.interval = setInterval(() => {
      const { airplaneModeOn, state, notifications, tickCount } = this.state;
      if (!airplaneModeOn && state === gameState.PLAYING) {
        let randomIndex;
        // test 3 different indexes
        const randomIndex1 = Math.floor(Math.random()*allNotifications.length);
        const randomIndex2 = Math.floor(Math.random()*allNotifications.length);
        const randomIndex3 = Math.floor(Math.random()*allNotifications.length);
        if (!notifications.find(n => n.id === allNotifications[randomIndex1].id) && allNotifications[randomIndex1].id >= 10) {
          randomIndex = randomIndex1;
        } else if (!notifications.find(n => n.id === allNotifications[randomIndex2].id) && allNotifications[randomIndex2].id >= 10) {
          randomIndex = randomIndex2;
        } else if (!notifications.find(n => n.id === allNotifications[randomIndex3].id) && allNotifications[randomIndex3].id >= 10) {
          randomIndex = randomIndex3;
        }
        if (randomIndex) {
          this.setState({ notifications: notifications.concat(allNotifications[randomIndex]) });
        }
        if ((notifications.length + 1) * ((window.innerHeight-50)/14) > (window.innerHeight - 50)) { // 46px -> notification height, 50px -> power-ups navbar height
          this.stopHell();
          this.setState({ state: gameState.GAMEOVER });
          return 0;
        }
        this.setState({ tickCount: tickCount + 1 });
        if (tickCount%this.ticksBeforeSpeedChange === 0 && tickCount > 0 && this.tickInterval >= 1000) { // 500ms is the minimum interval
          this.stopHell();
          this.tickInterval -= 400;
          this.ticksBeforeSpeedChange *= 3;
          const fasterNoti = {
            id: this.tickInterval,
            kind: kind.SYSTEM,
            title: "***FASTER***",
            text: "(This is a game notification inside the notification game)"
          };
          this.setState({ notifications: notifications.concat(fasterNoti) });
          this.startHell();
        }
      }
    }, this.tickInterval);
  };

  startTutorial2 = () => {
    this.setState({ notifications: allNotifications.slice(3, 10), state: gameState.TUTORIAL2 });
  };

  stopHell = () => {
    clearInterval(this.interval);
  }

  render() {
    const {
      onAirplaneModeClick,
      onNotificationClick,
      resetGame,
      state: { airplaneModeOn, airplaneModeReady, notifications, points, state }
    } = this;
    return (
      <div>
        <Navbar airplaneModeOn={airplaneModeOn} airplaneModeReady={airplaneModeReady} onAirplaneModeClick={onAirplaneModeClick} points={points} />
        {
          notifications.map((n, index) => (
            <Notification key={n.id} { ...n } onNotificationClick={onNotificationClick} index={index} />
          ))
        }
        {
          state === gameState.GAMEOVER ?
            <div className="gameover" onClick={resetGame}>
              <div className="title">
                GAME OVER
              </div>
              <div className="action">
                Your score is {points}. Try again.
              </div>
            </div> : null
        }
      </div>
    );
  }
}

export default App;
