//Change to Contract address
const contract_address = "0xAC6fA3194782d5601Bed56F66Fd273a271618A1D";
//Change to Master Wallet Address
const wallet_address = '0x139417CF49C0985DD7990dD0d6F04FA1AeBa6A4f';


const dApp = {
  ethEnabled: function() {
    // If the browser has MetaMask installed
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
      return true;
    }
    return false;
  },

  // Buy Tokens
  buytoken: function() {
    var amount = document.getElementById("buyAmount").value;
    if ((amount<=0)) {
      window.alert("Amount should be positive!");
      return;
    }
    console.log("Accounts", this.accounts[0])
    this.contract.methods.buyTokens(this.accounts[0]).send({from: this.accounts[0], value: web3.utils.toWei(amount, 'ether')});
  },

  main: async function() {
    // Initialize web3
    if (!this.ethEnabled()) {
      alert("Please install MetaMask to use this dApp!");
      location.href='index.html';
    }

    this.accounts = await window.web3.eth.getAccounts();

    this.cryptoRightABI = await (await fetch("./buytokenABI.json")).json();

    this.contract = new window.web3.eth.Contract(
      this.cryptoRightABI,
      contract_address,
      { defaultAccount: this.accounts[0] }
    );
    console.log("Contract object", this.contract);
    console.log("Accounts", this.accounts[0])

    //Show cap
    var text = await this.contract.methods.cap().call({from:	wallet_address})
    text = web3.utils.fromWei(text, 'ether')
    document.getElementById("maxinv").innerHTML = 'Max Investment Per User: ' + text + 'Eth';
    
    //Show balance
    var bal = await this.contract.methods.balanceOf(this.accounts[0]).call({from:	this.accounts[0]})
    bal = web3.utils.fromWei(bal, 'ether')
    document.getElementById("curbal").innerHTML = 'Your Current Investment: ' + bal + 'Eth';
    
    //Show Progress
    var goal = await this.contract.methods.goal().call({from:	wallet_address})
    var raised = await this.contract.methods.weiRaised().call({from:	wallet_address})
    var progress = (raised/goal) * 100
    var ethgoal = web3.utils.fromWei(goal, 'ether')
    var ethraised = web3.utils.fromWei(raised, 'ether')
    document.getElementById("prog").innerHTML = ethraised + "/" + ethgoal + 'ETH';
    document.getElementById("prog").style.width = progress + "%";
  }
};

dApp.main()
  