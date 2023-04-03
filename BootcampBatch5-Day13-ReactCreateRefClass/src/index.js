import React from "react";
import ReactDOM from "react-dom";
// import { faker } from "@faker-js/faker";
import "semantic-ui-css/semantic.min.css";
// import moment from "moment";

//import Component App
// import Counting from "./components/Counting";
// import Clock from "./components/Clock";
// import Comments from "./Comments";
// import Form from "./components/Form";
import App from "./App";

//buat variabel penyimpanan data
// const data = [
//   {
//     name: faker.name.fullName(),
//     avatar: faker.image.avatar(),
//     comment: faker.lorem.text(),
//     time: moment(faker.date.recent()).calendar(),
//     likes: Math.floor(Math.random() * 10) + 1
//   },
//   {
//     name: faker.name.fullName(),
//     avatar: faker.image.avatar(),
//     comment: faker.lorem.text(),
//     time: moment(faker.date.recent()).calendar(),
//     likes: Math.floor(Math.random() * 10) + 1
//   },
//   {
//     name: faker.name.fullName(),
//     avatar: faker.image.avatar(),
//     comment: faker.lorem.text(),
//     time: moment(faker.date.recent()).calendar(),
//     likes: Math.floor(Math.random() * 10) + 1
//   },
// ];

//render data
ReactDOM.render(<App />, document.getElementById("root"));
