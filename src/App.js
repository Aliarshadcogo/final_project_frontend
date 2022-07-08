
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import ListBlogScreen from './ListBlogScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import UserDashboardScreen from './UserDashboardScreen';
import CreateBlogScreen from './CreateBlogScreen';
import SingleBlogScreen from './SingleBlogScreen';
import EditBlogScreen from "./EditBlogScreen"

function App() {
  return (
    <Router className="App">
      <Header/>
      <main className='py-3'> 
      <Routes>
        <Route path="/blog/edit/:id" element={<EditBlogScreen/>} />
        <Route path="/blog/:id"  element={<SingleBlogScreen/>}/>
        <Route path="/user/:id" element={<UserDashboardScreen/>}/>
        <Route path="/createBlog" element={<CreateBlogScreen/>} exact />
        <Route path="/signup" element={<SignupScreen/>} exact/>
        <Route path="/login" element={<LoginScreen/>} exact/>
        <Route path="/" element={<ListBlogScreen />} exact/>
      </Routes>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
