import React, { useState, useEffect } from "react";
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
    const [currentUserAddress, setCurrentUserAddress] = useState("");

    const router = useRouter();

    const fetchData = async () => {
        try {
            const contract = await connectWithContract();

            const connectAccount = await connectWallet();
            setAccount(connectAccount);

            const userName = await contract.getUserName(connectAccount);
            setUserName(userName);

            const friendLists = await contract.getMyFriendList();
            setFriendList(friendLists);

            const userLists = await contract.getAllAppUser();
            setUserLists(userLists);
        } catch (error) {
            setError("Please Install And Connect Your Wallet");
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    const readMessages = async (friendAddress) => {
        try {
            const contract = await connectWithContract();
            const read = await contract.readMessage(friendAddress);
            setFriendMsg(read);
        } catch (error) {
            setError("Currently You Have no Message");
        }
    };

    const createAccount = async ({ name, accountAddress }) => {
        try {
            if (name || accountAddress) return setError("Name or Account cannot be empty");

            const contract = await connectWithContract();
            const getCreatedUser = await contract.createAccount(name);
            setLoading(true);
            await getCreatedUser.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Error while creating your account. Please Reload!!");
        }
    };

    const addFriends = async ({ name, accountAddress }) => {
        try {
            if (name || accountAddress) return setError("Please provide a valid name");

            const contract = await connectWithContract();
            const addMyFriend = await contract.addFriend(accountAddress, name);
            setLoading(true);
            await addMyFriend.wait();
            setLoading(false);
            router.push("/");
            window.location.reload();
        } catch (error) {
            setError("Something went wrong while adding friend. Please try again!");
        }
    };

    const sendMessage = async ({ msg, address }) => {
        try {
            if (msg || address) return setError("Please Type your Message first");

            const contract = await connectWithContract();
            const message = await contract.sendMessage(address, msg);
            setLoading(true);
            await message.wait();
            setLoading(false);
            window.location.reload();
        } catch (error) {
            setError("Please reload and try again");
        }
    };

    const readUser = async (userAddress) => {
        const contract = await connectWithContract();
        const userName = await contract.getUserName(userAddress);
        setCurrentUserName(userName);
        setCurrentUserAddress(userAddress);
    };

    return (
        <ChatAppContext.Provider
            value={{
                readMessages,
                createAccount,
                addFriends,
                sendMessage,
                readUser,
                connectWallet,
                CheckIfWalletConnected,
                account,
                userName,
                frinedLists,
                friendMsg,
                loading,
                userLists,
                error,
                currentUserName,
                currentUserAddress,
            }}
        >
            {children}
        </ChatAppContext.Provider>
    );
};
