import Forms from "./Components/Forms";
import LoginModule from "./Components/LoginModule";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAdmin from "./Components/ViewAdmin";
import View from "./Components/View";
import ViewData from "./Components/ViewData";
function App() {
  return (
  <BrowserRouter>
     <Routes>
       <Route path="/" element={<LoginModule/>}></Route>
       <Route path="/Forms" element={<Forms/>}></Route>
       <Route path="/ViewAdmin" element={<ViewAdmin/>}></Route>
       <Route path="/View" element={<View/>}></Route>
       <Route path="/Viewdata" element={<ViewData/>}></Route>
     </Routes>
</BrowserRouter>
  );
}
export default App;
