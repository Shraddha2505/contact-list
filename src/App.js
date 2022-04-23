import React, {useState, useEffect} from "react";
import "./App.css";

const App = () => {
  /*const contacts = [
    { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25 },
    { name: "Jason Long", email: "jason.long@notreal.com", age: 45 },
    { name: "Peter Pan", email: "peter.pan@neverland.com", age: 100 },
    { name: "Amy McDonald", email: "amy@email.com", age: 33 }
];*/

const [results, setResults] = useState([]);

useEffect(() => {
  fetch("https://randomuser.me/api/?results=10")
    .then(response => response.json())
    .then(data => {
      console.log(data);
      setResults(data.results);
    });
}, [])


  return (
    <>
      {results.map(result => (
        <ContactCard
          avatar={result.picture.large}
          name={result.name.first + " " + result.name.last}
          email={result.email}
          age={result.dob.age}
        />
      ))}
    </>
  );
};

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);

  return (
    <div className="contact-card">
      <img src={props.avatar} alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <button onClick={() => setShowAge(!showAge)}>
          Show Age
        </button>
        {showAge && <p>Age: {props.age}</p> }
      </div>
    </div>
  );
};





/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/
export default App;
