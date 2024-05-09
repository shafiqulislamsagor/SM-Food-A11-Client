

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <div className='poppins'>
        <Navbar />
        <div className='min-h-[calc(100vh-337px)]'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
