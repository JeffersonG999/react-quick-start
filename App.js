import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 250,
};

const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

function MyButtonFirst() {
  return (
    <button>Im a first button {user.name}</button>
  );
}

function MyButtonSecond() {
  return (
    <button>Im a second button {user.name}</button>
  );
}

function MyButtonThird() {
  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

function MyButtonFourth() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert('You clicked me!');
  }

  return (
    <button onClick={handleClick}>
      Im a fourth button. Clicked {count} times.
    </button>
  );
}

function MyButtonFifth({ together, onClick }) {
  return (
    <button onClick={onClick}>Im a fifth button {together}</button>
  );
}

function App() {
  let content;
  if (1 == 2) {
    content = <MyButtonFirst />;
  } else {
    content = <MyButtonSecond />;
  }

  const [together, setTogether] = useState(0);
  function handleTogether() {
    setTogether(together + 1);
  }

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
      <img src={user.imageUrl} width={user.imageSize} heigh={user.imageSize} />	  
      {content}
      <MyButtonFirst />
      <MyButtonThird />
      <MyButtonFourth />
      <MyButtonFifth together={together} onClick={handleTogether} />
      <MyButtonFifth together={together} onClick={handleTogether} />
    </div>
  );
}

export default App;
