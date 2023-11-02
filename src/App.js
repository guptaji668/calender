// import Employee from "./Components/Employee";
// import DisplayAllEmployee from "./Components/DisplayAllEmpolyee"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import InterviewSchedule from "./Components/code";
// import InterviewSchedule from "./Components/interview";

// import Product from "./Components/practiceproduct";
// import DisplayProduct from "./Components/DisplayProduct";

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          {/* <Route element={<Employee/>} path="/employee"/> */}
          {/* <Route element={<InterviewSchedule/>} path="/"/> */}
          {/* <Route element={<ScheduleButton/>} path="/interview"/> */}
          {/* <Route element={<InterviewSchedule />} path="/"/> */}
          {/* <Route element={<InterviewSchedule />} path="/"/> */}
          <Route element={<InterviewSchedule />} path="/"/>

          {/* <Route element={<DisplayAllEmployee/>} path="/displayallemployee"/>
          <Route element={<Product/>} path="/product"></Route>
          <Route element={<DisplayProduct/>} path="/displayproduct"></Route> */}
        </Routes>
      </Router>
  
    </div>
  );
}

export default App;
