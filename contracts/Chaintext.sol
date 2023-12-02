//SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 < 0.9.0;

contract Chaintext{

    //User structure
    struct user{
        string name;
        friend[] friendList;
    }

    //friend structure
    struct friend{
        address pubkey;
        string name;
    }
}