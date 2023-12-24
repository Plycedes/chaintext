import React, { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { CheckIfWalletConnected, connectWallet, connectWithContract } from "../utils/apiFeature";

export const ChatAppContext = React.createContext();

export const ChatAppProvider = ({ children }) => {
    const [account, setAccount] = useState("");
    const [userName, setUserName] = useState("");
    const [frinedLists, setFriendList] = useState([]);
    const [friendMsg, setFriendMsg] = useState([]);
    const [loading, setLoading] = useState(false);
    const [userLists, setUserLists] = useState([]);
    const [error, setError] = useState("");

    const [currentUserName, setCurrentUserName] = useState("");
    const [currentUsetAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();

    return <ChatAppContext.Provider value={{}}>{children}</ChatAppContext.Provider>;
};
