import { GoogleOAuthProvider } from '@react-oauth/google';
import Messanger from "./components/Messanger";
import AccountProvider from './components/AuthContent/AccountProvider';


const App = () => {

  const clientId = "452076217318-37ffupot2omlqssudgfv4u793ugfpvn1.apps.googleusercontent.com"

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <AccountProvider>
        <Messanger />
      </AccountProvider>
    </GoogleOAuthProvider>
    
  );
};

export default App;