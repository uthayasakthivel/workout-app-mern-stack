import Header from "./Sections/Header"
import HomePage from "./pages/HomePage"
import { store } from "./Store/Store.js"
import { Provider } from "react-redux"

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <HomePage />
      </Provider>
    </div>
  )
}

export default App
