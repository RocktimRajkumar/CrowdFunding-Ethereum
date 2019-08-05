pragma solidity ^0.4.17;

contract Campaign{
    // collection of key value pairs
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    
    // === Fields ===
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) public approvers;
    
    
    // === Methods ===
    
    // == Modifier ==
    modifier authorization(){
        require(msg.sender == manager);
        _;
    }
    
    // == constructor ==
    //Setting the manager and minimum amount to contribute
    function Compaign(uint minimum) public {
        manager = msg.sender;
        minimumContribution = minimum;
    }
    
    //donate money to compaign and became an approver
    function contribute() public payable{
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
    }
    
    //creating a new request by the manager
    function createRequest(string description, uint value, address recipient)
        public authorization{
            Request memory newReq = Request({
                description : description,
                value : value,
                recipient : recipient,
                complete : false,
                approvalCount : 0
            });
            
            requests.push(newReq);
        }
        
    function approveRequest(uint index) public {
        Request storage request = requests[index];
        
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        
        request.approvals[msg.sender] = true;
        request.approvalCount++;
        
        
    }
    
}