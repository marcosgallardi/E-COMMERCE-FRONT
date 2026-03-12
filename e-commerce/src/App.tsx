
import { Route, Routes } from 'react-router-dom'
import { Homepage } from './pages/homepage/HomePage'
import { CardDetail } from './components/cardDetail/CardDetail'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/detail/:id' element={<CardDetail />} />


      </Routes>


    </>
  )
}

export default App
