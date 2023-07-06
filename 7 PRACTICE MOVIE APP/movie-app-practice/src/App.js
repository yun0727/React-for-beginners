import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route path={`${process.env.PUBLIC_URL}/about-us`} element={< Detail />}>

        </Route>

        {/* <Route path="/about-us">
          <Detail />
        </Route> */}

        {/* <Route path="/movie/:id">
          <Home />
        </Route> */}
        <Route path={`${process.env.PUBLIC_URL}//movie/:id`} element={< Home />}>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
