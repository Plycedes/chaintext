import "@styles/globals.css";

export const metadata = {
    title: "Chaintext",
    description: "Decentralized Chatting App",
};

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <main className="app">{children}</main>
                </div>
            </body>
        </html>
    );
};

export default RootLayout;
