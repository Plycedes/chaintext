import React, { useState, useEffect } from "react";
import Image from "next/image";

import Style from "./Model.module.css";
import images from "../../Assets";
import { ChatAppContext } from "@/context/ChatAppContext";
import { Loader } from "../../components/index";

const Model = ({ openModel, title, head, info, smallInfo, images, functionName }) => {
    return (
        <div className={Style.Model}>
            <div className={Style.Model_box}>
                <div className={Style.Model_box_left}></div>
                <div className={Style.Model_box_left}></div>
            </div>
        </div>
    );
};

export default Model;
