import '../styles/globals.css';
import type { AppProps } from 'next/app';


// Context
import { StyleProvider } from '../contexts/StyleContext';
import { TimerProvider } from '../contexts/TimerContext';
import { SoundsProvider } from '../contexts/SoundsContext';
// import Profile from './profile';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';

function App({ Component, pageProps }: AppProps) {
  return (
   
    <StyleProvider>
      <TimerProvider>
        <SoundsProvider>
          <>
            <Component {...pageProps} />   

          </>
        </SoundsProvider>
      </TimerProvider>
    </StyleProvider>

    // <Profile/>
  );
}

export default withAuthenticator(App)