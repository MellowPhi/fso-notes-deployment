import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import axios from 'axios'

// const promise = axios.get('http://localhost:3001/notes')
// promise.then(response => {
//   console.log(response)
// })
// console.log(promise)
// const promise2 = axios.get('http://localhost:3001/foobar')
// console.log(promise2)
// const notes = [
//   {
//     id: 1,
//     content: 'HTML is easy',
//     important: true
//   },
//   {
//     id: 2,
//     content: 'Browser can execute only Javascript',
//     important: true
//   },
//   {
//     id: 3,
//     content: 'GET and POST are the most important methods of HTTP protocol',
//     important: true
//   }
// ]

ReactDOM.createRoot(document.getElementById('root')).render(
<App />)
