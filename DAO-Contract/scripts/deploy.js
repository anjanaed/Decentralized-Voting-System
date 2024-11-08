async function main() {
    const Voting = await ethers.getContractFactory("Voting");

    const Voting_ = await Voting.deploy(["Mark","Mike","Henry","Rock"],90);
    console.log("Contract Address: ",Voting_.address);


    
}

main()
.then(()=> process.exit(0))
.catch(error=>{
    console.log(error);
    process.exit(1);
});