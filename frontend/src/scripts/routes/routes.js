import Home from '../pages/Home';
import Check from '../pages/Check';
import CalculatorCheck from '../pages/CalculatorCheck';
import ResultsCheck from '../pages/ResultsCheck';
import Articles from '../pages/Articles';
import ArticleDetails from '../pages/ArticleDetails';
import Consultation from '../pages/Consultation';
import About from '../pages/About';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const routes = {
  '/': Home,
  '/home': Home,
  '/check': Check,
  '/calculator-check': CalculatorCheck,
  '/results-check': ResultsCheck,
  '/articles': Articles,
  '/articles/:id': ArticleDetails,
  '/consultation': Consultation,
  '/about': About,
  '/login': Login,
  '/signup': Signup,
};

export default routes;
