import './App.css'
import MessageContext from './context/MessageContext'
import ComponentB from './components/ComponentB'
import { myData } from './context/userData';

function App() {
  return (
    <>
      <MessageContext.Provider value={myData}>
        <ComponentB />
      </MessageContext.Provider>
    </>
  )
}

export default App;