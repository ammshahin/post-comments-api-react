import { Routes, Route } from "react-router-dom";
import Posts from './components/Posts/Posts';
import Comments from './components/Comments/Comments';
import './App.css';



function App() {
  return (
    
    <div>
      <Routes>
          <Route path = '/' element = {<Posts/>} />
          <Route path = '/comments/:id' element = {<Comments/>}/>
      </Routes>
      {/* <Posts></Posts> */}
      
    
    </div>
  );
}

export default App;
