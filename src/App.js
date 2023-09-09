import React from 'react'
import './App.css';
import SearchBar from './component/SearchBar'

const App = () => {
  // const [value, setValue] = useState("");
  // const [message, setMessage] = useState([]);
  // const handle = (curEle) => {
  //   // console.log(value);
  //   if (value.trim() !== '') {
  //     setMessage([...message, value]);
  //     setValue('');
  //   }
  // }
  return (
    <>
      {/* <SearchBar />
      <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      <button onClick={handle}>Click</button>
      <ul>
        {message.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul> */}
      <SearchBar />
    </>
  )
}

export default App
