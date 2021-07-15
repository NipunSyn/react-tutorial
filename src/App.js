import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Learn to React
        </p>
        {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}

        {/* <EventBind></EventBind> */}

        {/* passing methods as props */}
        {/* <ParentComponent></ParentComponent> */}

        <UserGreeting></UserGreeting>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      {/* <Hello name="John"></Hello>
      <Hello name="Kane"></Hello>
      <Hello name="Edge"></Hello> */}

      {/* <Welcome></Welcome> */}

      {/* using stateless functions */}
      <Greet name="Edge" heroName="Batman">
        <p>This is Children props</p>
      </Greet>
      <Greet name="John Cena" heroName="Jaggu">
        <button>Fight</button>
      </Greet>

      {/* using stateful classes */}
      <Welcome name="Edge" heroName="Batman"></Welcome>

      {/* Using state */}
      <Message name= "Me" heroName= "Myself"></Message>

      {/* Using set state to make a counter */}
      <Counter addValue= {3}></Counter>
    </div>
  );
}

export default App;
