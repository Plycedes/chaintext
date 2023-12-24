import "../styles/globals.css";

import { ChatAppProvider } from "../context/ChatAppContext";
import { NavBar } from "../components/index";

const MyApp = ({ Component, pageProps }) => (
    <ChatAppProvider>
        <NavBar />
        <Component {...pageProps} />
    </ChatAppProvider>
);

export default MyApp;
