import { Route, Routes } from "react-router-dom"
import { Homepage } from "../pages/homepage/HomePage"
import { CursosPage } from "../pages/cursospage/CursosPage"
import { CardDetail } from "../components/cardDetail/CardDetail"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/cursos' element={<CursosPage />} />
                <Route path='/detail/:id' element={<CardDetail />} />
            </Routes>
        </>
    )
}
