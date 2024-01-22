import React from "react";
import Image from "next/image";

import Style from "./Loader.module.css";
import images from "../../Assets";

const Loader = () => {
    return (
        <div className={Style.Loader}>
            <div className={Style.Loader_box}>
                <Image src={images.loader} alt="Loader" width={100} height={100} />
            </div>
        </div>
    );
};

export default Loader;
