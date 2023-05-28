
import Findcoder from "./Components/Findcoder"
 import { BrowserRouter,Routes,Route } from "react-router-dom"
import Explore from "./Components/Explore"
import Hire from "./Components/Hire"
import Dev from "./Components/Dev"
import Challenges from "./Components/Challenges"

import Homecrud from "./CRUD/Homecrud"
import Createuser from "./CRUD/Createuser"
import Users from "./CRUD/Users"
import EditUser from "./CRUD/EditUser"

const App=()=>{
    return(
        <div>
            <BrowserRouter>
                <Homecrud/>
                <Routes>
                    <Route element={<Createuser/>} path="/"></Route>
                    <Route element={<Users/>} path="/users"></Route>
                    <Route element={<EditUser/>} path="/edituser/:abc" ></Route>
                </Routes>
            </BrowserRouter>
            {/* <BrowserRouter>
                <Findcoder/>
                <Routes>
                    <Route element={<Explore/>} path="comp1"></Route>
                    <Route element={<Hire/>} path="comp2"></Route>
                    <Route element={<Dev/>} path="comp3"></Route>
                    <Route element={<Challenges/>} path="comp4"></Route>
                </Routes>
            </BrowserRouter> */}

        </div>
    )
}
export default App