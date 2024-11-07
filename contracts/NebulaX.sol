// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;


contract NebulaX{
    string private data;

    function setData(string calldata _data) external {
        data = _data;
    }

    function getData() external view returns (string memory) {
        return data;
    }
}
