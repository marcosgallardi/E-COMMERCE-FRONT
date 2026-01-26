import { Route, Routes } from "react-router-dom"
import { Homepage } from "../pages/homepage/homepage"
import { CursosPage } from "../pages/cursospage/CursosPage"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/cursos' element={<CursosPage />} />

            </Routes>
        </>
    )
}
