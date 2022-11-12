import './App.css';
import Home from './Pages/Home'
import Error from './Pages/Error'
import LogIn from './Pages/LogIn'
import PrivatRoute from './Pages/PrivateRoute'
import AuthWrapper from './Pages/AuthWrapper'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useGlobalContext} from './context'

function App() {
  const {loading} = useGlobalContext()
  return (
    <div className="App">
    <AuthWrapper>
     <Router>
       <Routes>
         <Route path='/' exact element={<PrivatRoute><Home/></PrivatRoute>}/>
         <Route path='*' element={<Error/>}/>
         <Route path='/login' element={<LogIn/>}/>
       </Routes>
     </Router>
    </AuthWrapper>
    </div>
  );
}

export default App;
