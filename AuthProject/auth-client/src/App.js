import { Route, Routes } from 'react-router-dom'

import './App.css';
import { AuthProvider } from './Utils/AuthContext';
import LoginRegister from '../src/Container/LoginContainers';
import BlueWindow from './Pages/BlueWindow'
import ProtectedRoute from './Utils/ProtectedRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Routes>
        <Route path='/' element={<LoginRegister/>}/>

        <Route path="/blue" element={<ProtectedRoute element={<BlueWindow />} />}/>
      </Routes>
      </AuthProvider>
   
    </div>
  );
}

export default App;
