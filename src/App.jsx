import { Component } from "react";
import Users from "./components/Users";
import "./App.css";
import FocusInputCard from "./components/Hooks/Refs/FocusInputCard";
import Timer from "./components/Hooks/Refs/Timer";
import DocumentRefExample from "./components/Hooks/Refs/ScrollRef";
import Drilling from "./components/Hooks/Context/Drilling";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "light",
      users: [],
      reset: false,
      IsRef: false,
      IsContext: true,
    };
  }
  async fetchData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const allUsers = await response.json();
      return allUsers;
    } catch (error) {
      console.log(error);
    }
  }
  async componentDidMount() {
    const users = await this.fetchData();
    this.setState({ users });
  }
  render() {
    const { users, reset, IsRef, IsContext } = this.state;
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
              <Users data={users} />
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
