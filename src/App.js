import { Routes, Route } from "react-router-dom";
import Posts from './components/Posts';
import Comments from './components/Comments';
import './App.css';



function App() {
  return (
    <div>
      <Routes>
          <Route path = '/' element = {<Posts/>} />
          <Route path = '/comments/:id' element = {<Comments/>}/>
      </Routes>
      
      
    
    </div>
  );
}

export default App;
