//Import data to make sure all components are connected
import logo from './assests/wizard-hat.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="left_header">
          <img src={logo} alt="https://www.flaticon.com/free-icons/wizard-hat" title="wizard hat icons" />
          <h3>Home</h3>
          <p>Wizard hat icons created by manshagraphics Flaticon</p>
        </div>
      </div>
    </div>
  );
}

export default App;