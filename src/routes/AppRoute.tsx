import {Routes, Route} from "react-router-dom"
import Jogo from "../pages/Jogo/Jogo"
import Header from "../components/Header/Header"

export default function AppRoutes(){
    return(
        <Routes>
            <Route path='/jogo' element={
                <>
                 <Header titulo="Jogo"/>
                 <Jogo />
                </>       
                } />
        </Routes>
    )
}
