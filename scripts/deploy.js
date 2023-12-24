const hre = require("hardhat");

async function main() {
    const chaintext = await hre.ethers.deployContract("Chaintext");
    //const chaintext = await Chaintext.deploy();

    await chaintext.waitForDeployment();

    console.log(`Contact Address: ${chaintext.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

