import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import GlobalStyle from 'styles/global';
import { Home, Around, Detail, Likes, Search, About } from 'pages/index';

const App = () => {
  const { isOpen } = useSelector(state => state.overlay);
  return (
    <>
      <GlobalStyle isOpen={isOpen} />
      <Router basename={window.location.pathname || ''}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/around" component={Around} />
          <Route
            exact
            path="/detail/:id"
            render={({ match }) => (
              <Detail key={match.params.id} match={match} />
            )}
          />
          <Route path="/likes" component={Likes} />
          <Route path="/search" component={Search} />
          <Route path="/about" component={About} />>
        </Switch>
      </Router>
    </>
  );
};

export default App;
