import Introducao from "./components/introdução"
import Pt1 from "./components/pt1"
import Pt2 from "./components/pt2"
import ProxP from "./components/proxPassos"

import { Image } from "./style"

function App() {

  return (
    <>
      <div>
        <Image src="./public/react.png"/>
        <Introducao />
        <Pt1 />
        <Pt2 />
        <ProxP />
      </div>
    </>
  )
}

export default App
