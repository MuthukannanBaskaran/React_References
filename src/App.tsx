import './App.css'
import MessageContext from './context/MessageContext'
import ComponentB from './components/ComponentB'
import { myData } from './context/userData';
import UserInfoContext from './context/UserInfoContext';
import BlogPage from './components/BlogPage';

function App() {
  return (
    <>
      <MessageContext.Provider value={myData}>
        <ComponentB />
      </MessageContext.Provider>
      <UserInfoContext.Provider value={myData}>
        <BlogPage />
      </UserInfoContext.Provider>
    </>
  )
}

export default App;