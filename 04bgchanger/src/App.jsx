import { useState} from "react"

function App() {
  const [color, setColor] = useState("green");

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: color}}
      >
      <div className="fixed flex flex-wrap justify-centre bottom-12 inset-x-0 px-2">
        <div className ="flex flex-wrap justify-centre grp-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        </div>
      </div>
     </div>
    </>
  )
}

export default App
//this is first change made for firstHey


i am made change on second time to see change on github ddd