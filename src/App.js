import './App.css';
import ChildCounter from './components/childCounter'
import CousinCounter from './components/cousinCounter'
import { useRef } from 'react'

function App() {
  const divRef = useRef(null);

  const handleClick = () => {
    if (divRef.current && divRef.current.style.backgroundColor === 'lightblue') divRef.current.style.backgroundColor = 'lightpink';
    else divRef.current.style.backgroundColor = 'lightblue'
  }

  return (
    <div
      ref={divRef} 
      style={{backgroundColor: "lightpink"}} 
    >
      <ChildCounter/>
      <CousinCounter/>
      <button onClick={handleClick}>Change Background Color</button>
    </div>
  );
}

export default App;
