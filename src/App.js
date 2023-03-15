import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Pokedex from './containers/Pokedex'
import AppNavigator from './components/AppNavigator'
import PokemonDetails from './containers/PokemonDetails'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import Favourites from './containers/favourites'

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <AppNavigator />
          <Route exact path="/" component={Pokedex} />
          <Route exact path="/pokemon/:id" component={PokemonDetails} />
          <Route exact path="/favourites" component={Favourites} />
        </Router>
      </PersistGate>
    </Provider>

  )
}
