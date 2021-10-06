
import ProductDetail from './components/ProductDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/" component={ProductList} />
        <Route exact path="/product/:productId" component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
