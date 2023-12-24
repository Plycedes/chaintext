import React, { useEffect, useState, useContext } from "react";

import { ChatAppContext } from "../context/ChatAppContext";

const Chaintext = () => {
    const { title } = useContext(ChatAppContext);
    return <div>{title}</div>;
};

export default Chaintext;
