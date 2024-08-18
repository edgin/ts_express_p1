
import axios from 'axios';
import './App.css'

const apiCall = () => {
  axios.get('http://localhost:3001').then((data) => {
    console.log(data)
  })
}
const requestUsers = () => {
  axios.get('http://localhost:3001/users-list/1').then((data) => {
    console.log(data)
  })
}

function App() {

  return (
    <>
      <h1>Test</h1>
      <button onClick={apiCall}>Make API Call</button>
      <h1>Users list</h1>
      <button onClick={requestUsers}>Make API Call</button>
    </>
  )
}

export default App
