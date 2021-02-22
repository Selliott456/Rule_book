import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Spells from './components/Spells'
import Home from './components/Home'

const App = () => (

  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/spells" component={Spells} />
  </Switch>
  </BrowserRouter>

)

export default App;
