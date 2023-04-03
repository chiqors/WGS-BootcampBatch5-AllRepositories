import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import "semantic-ui-css/semantic.min.css";
import moment from "moment";

//import Component App
import Comments from "./Comments";
// import Counting from "./components/Counting";

//buat variabel penyimpanan data
const data = [
  {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    comment: faker.lorem.text(),
    time: moment(faker.date.recent()).calendar(),
    likes: Math.floor(Math.random() * 10) + 1
  },
  {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    comment: faker.lorem.text(),
    time: moment(faker.date.recent()).calendar(),
    likes: Math.floor(Math.random() * 10) + 1
  },
  {
    name: faker.name.fullName(),
    avatar: faker.image.avatar(),
    comment: faker.lorem.text(),
    time: moment(faker.date.recent()).calendar(),
    likes: Math.floor(Math.random() * 10) + 1
  },
];

//render data
ReactDOM.render(<Comments data={data} />, document.getElementById("root"));
