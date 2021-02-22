import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Spells from './components/Spells'
import Home from './components/Home'
import Spellinfo from './components/Spellinfo'

const App = () => (

  <BrowserRouter>
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/spells" component={Spells} />
    <Route exact path="/spellinfo" component={Spellinfo} />
  </Switch>
  </BrowserRouter>

)

export default App;
