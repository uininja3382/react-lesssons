import { Component } from "react";
import Users from "./components/Users";
import "./App.css";
import FocusInputCard from "./components/Hooks/Refs/FocusInputCard";
import Timer from "./components/Hooks/Refs/Timer";
import DocumentRefExample from "./components/Hooks/Refs/ScrollRef";
import Drilling from "./components/Hooks/Context/Drilling";
import { UsersContext } from "./context/UsersProvider";
import PostProvider from "./context/PostProvider";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "light",
      reset: false,
      IsRef: false,
      IsContext: false,
    };
  }

  render() {
    const { reset, IsRef, IsContext } = this.state;
    return (
      <>
        <section className="layout">
          {" "}
          {/* Conditional Rendering */}
          {!reset && !IsRef && !IsContext ? (
            <>
              <h1 className="flex text-3xl justify-center text-orange-400">
                User Cards
              </h1>
              <PostProvider>
                <Users />
              </PostProvider>
            </>
          ) : (
            <Drilling />
          )}
        </section>
      </>
    );
  }
}
export default App;
