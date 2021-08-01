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
import NamedList from "./components/NamedList";
import Stylesheet from "./components/Stylesheet";
import Inline from "./components/Inline";
import "./appStyles.css";
import styles from "./appStyles.module.css";
import Form from "./components/Form";
import LifecycleA from "./components/lifecycle/LifecycleA";

function App() {
  return (
    <div className="App">
      <LifecycleA></LifecycleA>
      {/* <Form></Form> */}
      {/* <h1 className="error ">Error</h1>
      <h1 className={styles.success}>Success</h1> */}
      {/* <FunctionClick></FunctionClick>
        <ClassClick></ClassClick> */}

      {/* <EventBind></EventBind> */}

      {/* passing methods as props */}
      {/* <ParentComponent></ParentComponent> */}

      {/* <UserGreeting></UserGreeting> */}

      {/* List rendering */}

      {/* <Stylesheet primary={true}></Stylesheet>
        <Inline></Inline> */}
      {/* <Hello name="John"></Hello>
      <Hello name="Kane"></Hello>
      <Hello name="Edge"></Hello> */}

      {/* <Welcome></Welcome> */}

      {/* using stateless functions */}
      {/* <Greet name="Edge" heroName="Batman"> */}
      {/* <p>This is Children props</p> */}
      {/* </Greet> */}
      {/* <Greet name="John Cena" heroName="Jaggu"> */}
      {/* <button>Fight</button> */}
      {/* </Greet> */}

      {/* using stateful classes */}
      {/* <Welcome name="Edge" heroName="Batman"></Welcome> */}

      {/* Using state */}
      {/* <Message name= "Me" heroName= "Myself"></Message> */}

      {/* Using set state to make a counter */}
      {/* <Counter addValue= {3}></Counter> */}
    </div>
  );
}

export default App;
