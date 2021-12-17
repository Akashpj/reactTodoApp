import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Message from './Message';
import Clock from './Clock';
import ToggleButton from './ToggleButton';
import Main from './Components/Main';

function App() {
  return (
    <div>
      {/* <Welcome name="Apj" />
      <Message message="Happy Learning React JS" />
      <Clock date={new Date()} />
      <ToggleButton /> */}
      <Main />
    </div>
  );
}

export default App;
