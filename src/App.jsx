import { GoogleOAuthProvider } from '@react-oauth/google';
import Messanger from "./components/Messanger";
import AccountProvider from './components/AuthContent/AccountProvider';


const App = () => {

  const clientId = import.meta.env.VITE_CLIENT_ID

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
    
  );
};

export default App;