const hre = require("hardhat");
const { verify } = require("../utils/verify");

async function main() {
    const chaintext = await hre.ethers.deployContract("Chaintext");
    //const chaintext = await Chaintext.deploy();

    await chaintext.waitForDeployment();
    const address = chaintext.target;
    console.log(`Contact Address: ${address}`);
    console.log("Verifying...");
    await verify(address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

