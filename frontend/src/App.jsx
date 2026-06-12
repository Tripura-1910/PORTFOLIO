import { Outlet } from 'react-router-dom';
import './App.css';

import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {

 const [loading, setLoading] = useState(true);

  return (
    <>
    {loading ? (
      <Loader onComplete={() => setLoading(false)} />
    ) : (
     <main className='min-h-[calc(100vh-120px)]'>
      <Navbar/>
      <Outlet/>
      <Footer/>
        
     </main>
    )}

    
   
    </>
  );
}

export default App;
