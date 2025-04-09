import { Component } from "react";
import Users from "./components/Users";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      theme: "light",
      users: [],
      reset: false,
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
    const { users, reset } = this.state;
    return (
      <>
        <section className="layout">
          {" "}
          {/* Conditional Rendering */}
          {!reset ? (
            <>
              <h1 className="flex text-3xl justify-center text-orange-400">
                User Cards
              </h1>
              <Users data={users} />
            </>
          ) : (
            <div>Something is wrong!!</div>
          )}
        </section>
      </>
    );
  }
}
export default App;
