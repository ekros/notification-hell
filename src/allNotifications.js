import { kind } from "./constants.js";

const allNotifications = [
  // reserve from 1 to 9 for tutorial
  {
    id: 0,
    kind: kind.SYSTEM,
    title: "Welcome to Notification HELL. Deal with phone notifications, if you can.",
    text: "Hi there! This is you first notification. Nice, really?",
  },
  {
    id: 1,
    kind: kind.SYSTEM,
    title: "The game",
    text: "You can dismiss notifications. But only selecting 3 of the same color.",
  },
  {
    id: 2,
    kind: kind.SYSTEM,
    title: "Let's go",
    text: "Try to dismiss these 3 notifications selecting them all.",
  },
  {
    id: 3,
    kind: kind.SOCIAL,
    title: "Social",
    text: "This is a social notification.",
  },
  {
    id: 4,
    kind: kind.MESSAGING,
    title: "Messaging",
    text: "Toc toc.",
  },
  {
    id: 5,
    kind: kind.CALENDAR,
    title: "Calendar",
    text: "Are you an organized person?",
  },
  {
    id: 6,
    kind: kind.EMAIL,
    title: "Email",
    text: "Ahh! Emails... pure fun.",
  },
  {
    id: 7,
    kind: kind.SYSTEM,
    title: "Rules",
    text: "The goal is to score as much as posible. You lose the game if the notification list touches the bottom of the screen.",
  },
  {
    id: 8,
    kind: kind.SYSTEM,
    title: "And remember...",
    text: "You can use the airplane mode in case of trouble. Good luck!",
  },
  {
    id: 9,
    kind: kind.SYSTEM,
    title: "Start!!",
    text: "Dismiss this 3 system notifications to start the game.",
  },
  // SOCIAL 10-99
  {
    id: 10,
    kind: kind.SOCIAL,
    title: "Laura",
    text: "Sent you a private message"
  },
  {
    id: 11,
    kind: kind.SOCIAL,
    title: "Laura",
    text: "Labeled you in a picture"
  },
  {
    id: 12,
    kind: kind.SOCIAL,
    title: "Laura",
    text: "Commented on your post"
  },
  {
    id: 13,
    kind: kind.SOCIAL,
    title: "Mike",
    text: "Liked your post"
  },
  {
    id: 14,
    kind: kind.SOCIAL,
    title: "Mike",
    text: "Changed his profile picture"
  },
  {
    id: 15,
    kind: kind.SOCIAL,
    title: "John",
    text: "Liked your post"
  },
  // MESSAGING 100-199
  {
    id: 100,
    kind: kind.MESSAGING,
    title: "Laura",
    text: "Are you ignoring me?"
  },
  {
    id: 101,
    kind: kind.MESSAGING,
    title: "Laura",
    text: "You are reading my messages. Double tick doesn't lie."
  },
  {
    id: 102,
    kind: kind.MESSAGING,
    title: "Mum",
    text: "Are you going to come home this weekend?"
  },
  {
    id: 103,
    kind: kind.MESSAGING,
    title: "Mum",
    text: "Morning! Don't forget your lunch today :)"
  },
  {
    id: 104,
    kind: kind.MESSAGING,
    title: "Friends",
    text: "Mike sent a video"
  },
  {
    id: 105,
    kind: kind.MESSAGING,
    title: "Friends",
    text: "John sent a picture"
  },
  // CALENDAR 200-299
  {
    id: 200,
    kind: kind.CALENDAR,
    title: "Today",
    text: "Go to the doctor"
  },
  {
    id: 201,
    kind: kind.CALENDAR,
    title: "Today",
    text: "Play Notification Hell"
  },
  {
    id: 202,
    kind: kind.CALENDAR,
    title: "Tomorrow",
    text: "Holidays!"
  },
  {
    id: 203,
    kind: kind.CALENDAR,
    title: "Today",
    text: "Figure out how to disable notifications"
  },
  {
    id: 204,
    kind: kind.CALENDAR,
    title: "Someday",
    text: "Get rich and/or famous"
  },
  {
    id: 205,
    kind: kind.CALENDAR,
    title: "Yesterday",
    text: "Stop procrastinating"
  },
  // EMAIL 300-399
  {
    id: 300,
    kind: kind.EMAIL,
    title: "Adult Dating",
    text: "Invitation from Amelia"
  },
  {
    id: 301,
    kind: kind.EMAIL,
    title: "How I become rich in 5 days",
    text: "No Subject"
  },
  {
    id: 302,
    kind: kind.EMAIL,
    title: "VIAGRA & CIALIS",
    text: "No Subject"
  },
  {
    id: 303,
    kind: kind.EMAIL,
    title: "Penis enlargement",
    text: "You will not believe this"
  },
  {
    id: 304,
    kind: kind.EMAIL,
    title: "Happy Bank",
    text: "You have received a new transfer"
  },
  {
    id: 305,
    kind: kind.EMAIL,
    title: "Laura",
    text: "Please answer"
  },
  // SYSTEM 400-499
  {
    id: 400,
    kind: kind.SYSTEM,
    title: "Incoming call",
    text: "Laura"
  },
  {
    id: 401,
    kind: kind.SYSTEM,
    title: "Battery",
    text: "Some apps are consuming too much battery"
  },
  {
    id: 402,
    kind: kind.SYSTEM,
    title: "System update",
    text: "There is a new system update available"
  },
  {
    id: 403,
    kind: kind.SYSTEM,
    title: "Incoming call",
    text: "Mum"
  },
  {
    id: 404,
    kind: kind.SYSTEM,
    title: "25 apps updated",
    text: ""
  },
  {
    id: 405,
    kind: kind.SYSTEM,
    title: "Battery low",
    text: ""
  }
];

export default allNotifications;
