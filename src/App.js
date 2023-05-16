import {Route} from "react-router-dom";
import {Switch} from "react-router-dom";
import AllMeetups from "./pages/AllMeetups";
import NewMeetups from "./pages/NewMeetups";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layouts/MainNavigation";
import Layout from "./components/layouts/Layout";

function App() {
  return (
      <div>
          <Layout>
              <Switch>
                  <Route path={"/"} exact={true}>
                    <AllMeetups/>
                  </Route>

                  <Route path={"/new-meetup"}>
                    <NewMeetups/>
                  </Route>

                  <Route path={"/favorites"}>
                      <Favorites/>
                  </Route>
              </Switch>
          </Layout>
      </div>

  );
}

export default App;
