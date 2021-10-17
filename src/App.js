import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import NotFound from './components/NotFound/NotFound'
import AuthProvider from './components/utilities/AuthProvider/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
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
