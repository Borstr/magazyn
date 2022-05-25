import ProductList from './containers/ProductList';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <main>
        <GlobalStyle/>
        <ProductList/>
      </main>
    </Router>
  );
}

export default App;
