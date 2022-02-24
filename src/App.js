import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import Intro from "./pages/Intro";
import Article from "./pages/Article";
import DynamicArticle from "./pages/DynamicArticle";
import Table from "./pages/Table";
import GameOfLife from "./pages/GameOfLife";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/intro">
            <Intro />
          </Route>
          <Route exact path="/article">
            <Article />
          </Route>

          <Route exact path="/article/:id">
            <DynamicArticle />
          </Route>

          <Route exact path="/list">
            <Table />
          </Route>

          <Route exact path="/life">
            <GameOfLife />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
