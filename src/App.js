import React from "react";
import { Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "components/Navbar";
import Login from "pages/login.component";
import User from "pages/user.page";
import Post from "pages/post.page";
import store from "./redux/store";
export default function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/users" exact>
          <User />
          <Route path="/posts" exact>
            <Post />
          </Route>
        </Route>
      </Switch>
    </Provider>
  );
}
