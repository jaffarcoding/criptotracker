import {BrowserRouter as Rouetr , Routes, Route} from "react-router-dom"
import Header  from "./component/Header"
import  Home  from "./component/Home"
import Exchanges  from "./component/Exchanges"
import Coins  from "./component/Coins"
import CoinDetail  from "./component/CoinDetail"
import Footer from "./component/Footer"

function App() {
  return (
   <Rouetr>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/coins" element={<Coins/>}/>
      <Route path="/exchanges" element={<Exchanges/>}/>
      <Route path="/coin/:id" element={<CoinDetail/>}/>
    </Routes>
    <Footer/>
   </Rouetr>
  );
}

export default App;
