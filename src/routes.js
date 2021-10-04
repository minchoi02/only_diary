import { Route, Switch } from 'react-router-dom'
import Intro from './pages/intro'
import Login from './pages/login'
import SignUp from './pages/signUp'

export const PATHS = {
  intro: '/',
  login: '/login',
  signUp: '/signUp',
}

export default function Routes() {
  return (
    <Switch>
      <Route exact path={PATHS.intro} component={Intro} />
      <Route path={PATHS.login} component={Login} />
      <Route path={PATHS.signUp} component={SignUp} />
    </Switch>
  )
}