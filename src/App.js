import {Component, StrictMode} from 'react';
import './App.css';

const Header = () => {
  return <h2>Учу React, урок 124.</h2>
}

class Field extends Component {
  render() {
    const holder = "Введите текст";
    const styledField = {
      with: '300px'
    };
    return <input
        placeholder={holder}
        type ="text"
        style = {styledField}/>
  }
}
function Btn() {
  const text = "Нажми меня";
  const logged = false;

  return <button>{logged ? "Ввод" : text}</button>
}
function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header/>
      </StrictMode>
      <Field/>
      <Btn/>
    </div>
  );
}

export default App;
