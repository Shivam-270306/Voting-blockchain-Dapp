
const hre = require("hardhat");

async function main() {

    const Voting = await hre.ethers.getContractFactory("Voting");
    const voting = await Voting.deploy(["Alice", "Bob", "Charlie"], 20);

    await voting.deployed();

    console.log(
        `Contract address ${voting.address}`
    );
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});