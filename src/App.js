import { 
  Routes,
  Route
} from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { HomePage } from './components/HomePage/HomePage'
import { UserPage } from './components/UserPage/UserPage'
import { ErrorPage } from './components/ErrorPage/ErrorPage'
import './App.css';
import { SignUp } from './components/SignUp/SignUp';
import { Login } from './components/Login/Login';
import { PrivateRoute } from './components/PrivateRoute';

function App() {

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Login />} />
            <Route path="sign-up" element={<SignUp />} />
            <Route path="home" element={<PrivateRoute><HomePage /></PrivateRoute>} />
            <Route path="user" element={<PrivateRoute><UserPage /></PrivateRoute>} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </div>
  ); 
}

export default App;
