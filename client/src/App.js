import Login from "./components/Login";
import { SocketProvider } from "./contexts/SocketProvider";
import {ContactsProvider} from "./contexts/ContactsProvider";
import {ConversationsProvider} from './contexts/ConversationsProvider';
import useLocalStorage from "./hooks/useLocalStorage";
import Dashboard from "./components/Dashboard";

function App() {

  const [id, setId] = useLocalStorage('id')

  const dashboard =  (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  );

  return (
    <div className="App">
      {<Login onIdSubmit={setId} />}
    </div>
  );
}

export default App;
