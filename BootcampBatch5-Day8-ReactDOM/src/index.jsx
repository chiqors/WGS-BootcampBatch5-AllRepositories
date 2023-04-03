import renderDOM from './utils/render'
import Navbar from './components/Navbar';
import Home from './views/Home';

// Create a react element
// ReactDOM.render(navbar, document.getElementById('nav'));  // Render the navbar
// ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(page, document.getElementById('root'));
renderDOM(Navbar, 'nav');
renderDOM(Home, 'root');