import logo from './logo.svg';
import './App.css';
import {Greet} from './components/Greet';
import {Welcome} from './components/Welcome';
import {Message} from './components/Message';
import {Counter} from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreeting from './components/UserGreeting';
function App() {
  return (
    <div className = "App">
      {/*<FunctionClick/>
      <ClassClick/>
      <h> Hello World </h>
      <Greet name = "Yufei"/>
      <Greet name = "Alice"/>
      <Greet name = "Bob"/>
      <Welcome name = "Yoki"/>
      <Message name = "Yufei"/>
      <Counter />
      <EventBind /> 
      <ParentComponent/>*/}
      <UserGreeting />
    </div>
  );
}

export default App;



//snippets
//rce
//rconst
