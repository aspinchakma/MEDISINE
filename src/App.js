import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Common/Header/Header';
import HomeContainer from './components/Home/HomeContainer/HomeContainer';
import NotFound from './components/NotFound/NotFound'
import AuthProvider from './components/utilities/AuthProvider/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <HomeContainer></HomeContainer>
            </Route>
            <Route path="/home">
              <HomeContainer></HomeContainer>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
