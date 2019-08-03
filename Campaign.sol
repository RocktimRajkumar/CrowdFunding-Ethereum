pragma solidity ^0.4.17;

contract Campaign{
    // collection of key value pairs
    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
    }
    
    // === Fields ===
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    address[] public approvers;
    
    
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
        approvers.push(msg.sender);
    }
    
}