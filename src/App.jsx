

import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import UseAuth from './hooks/UseAuth';

function App() {

  const {loading,user} = UseAuth()

  console.log(user,loading);
  if(!loading) return <p>Loading now..........</p>

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
