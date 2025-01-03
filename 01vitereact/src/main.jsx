import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
      return (
        <div>
             <h1>Custom App</h1>
        </div>
      )
}

// const ReactElement ={
//   type: 'a',
//   props: {
//       href: 'https//google.com',
//       target: '_blank'
//   },
//   children: 'click me to visit google'

// }

const anotheruser = "chai or react"

const reactElement = React.createElement(
     'a',
     {href: 'https://google.com'},
     'click me to visit google'
    // anotheruser
)


const anotherElement = <a href="https://google.com" target='_blank'>visit google</a>

ReactDOM.createRoot(document.getElementById('root')).render(
  
  reactElement
  
)
