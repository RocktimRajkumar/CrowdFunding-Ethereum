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
