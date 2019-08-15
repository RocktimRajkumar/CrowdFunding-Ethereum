## Campaign Contract
### `CampaignFactory`

**Variables**

| variable |data types  | desc |
|--|--|--|
| deployedCampaigns| address[] | addresses of all the deployed contract|

<br> **Function**

| name| desc |
|--|--|
| createCampaign| create a new campaign contract |
|getDeployedCampaigns| return addresses of all the deployed contract|

### `Campaign`

**Variables**

|variable|data types|desc|
|--|--|--|
|manager  |address  |address of the person who is managing this compaign|
|minimumContribution|unint|Minimum donation required to be considered a contributor or 'approver' |
|approvers|address[]|List of addresses for every person who has donated money|
|requests|Request[]|List of requests that the manager has created.|

<br>**Functions**

|name| desc |
|--|--|
|Campaign  | constructor function that sets the minimumContribution and the owner |
|contribute|called when someone wants to donate money to the compaign and become an 'approver'|
|createRequest|called by the manager to create a new 'spending request'|
|approveRequest|called by each contributor to approve a spending request|
|finalizeRequest|After a request has gotten enough approvals, the manager can call this to get money sent  to the vendor|

<br>**Request Struc**

|Name  |Type  |Purpose|
|--|--|--|
| description |string  |Describes why the request is being created|
|value|uint|Amount of money that the manager wants to send to the vendor|
|recipient|address|Address that the money will be sent to|
|complete|bool|True if the request has already been processed (money sent)|

###  `Prerequisite`

 1. Install **Metamask** as Google Chrome Extension and Create an account.
 2.  Request Ether by sharing your ethereum address in social media <br>(`https://faucet.rinkeby.io/)`
 3. Get 0.01 ether free by giving the ethereum address <br>`(http://rinkeby-faucet.com/)`
 4. Create an account in [https://infura.io](https://infura.io/)
 5. Create .env file in Ethereum directory and add these line to it.
	 

	> mnemonic = 'Your mnemonic code' <br>
	link = 'Your infura end point link '


### `Dependencies Used`

| Name | Version | Description |
|--|--|--|
| solc |0.4.26 | Programming language to write smart contracts |
| ganache-cli  | 6.5.1 | Local Ethereum Test Network |
| mocha | 6.2.0 | JavaScript test framework |
|truffle-hdwallet-provider | 1.0.16 | The **Truffle HDWallet provider** is a convenient and easy to configure network connection to ethereum through infura.io |
| web3 |1.0.0-beta.55 |Ethereum JavaScript API which connects to the Generic JSON RPC spec. |
| dotenv|8.0.0 | Loads environment variables from a `.env` file into `process.env`|
| fs-extra| 8.1.0 |file system methods that aren't included in the native fs|
|next|9.0.3|JavaScript framework to build server-side rendering and static web application using React|
|react|16.9.0|JavaScript library for creating user interfaces|
|react-dom|16.9.0|DOM specific methods that can be used on React application|

### `Steps`
- **To Compile the Contract**
 > npm install
 - **To Compile the Contract**
 > node compile.js
 - **To test the Contract**
 > npm run test
 - **To deploy the Contract**
 > node deploy.js

 ## `UI Routing`
 | Path | Description |
 |--|--|
 | / | List of Campaigns |
 | /campaigns/new | Form to make a campaign |
 | /campaigns/0x8147 | Campaign details for campaign at address 0x8147 |
 | /campaigns/0x8147/requests | Requests for campaign at address 0x8147 | 
 | /campaigns/0x8147/requests/new | Form to create a request for campaign at address 0x8147 |