// SPDX-License-Identifier: MIT
pragma solidity >=0.8.7;

contract Election{

    struct Candidate{
        uint id;
        string name;
        uint voteCount;
    }

    mapping(address=>bool) public voters;
    //changing state of contract and writing to the blockchain 
    mapping(uint => Candidate) public candidates; 
    //persist these candidates to storage - data layer
    uint public candidatesCount; //can't know the size of mapping returns default value, so keeping count
    
    event votedEvent(
        uint indexed _id
    );

    constructor (){
        addCandidate("BJP");
        addCandidate("AAP");
        addCandidate("Congress");
    }
    
    function addCandidate(string memory _name) private {
        candidatesCount++;
        candidates[candidatesCount] = Candidate(candidatesCount,_name,0);
    }

    function vote(uint _id) public {
        require(!voters[msg.sender]);
        require(_id>0 && _id<=candidatesCount);
        candidates[_id].voteCount++;
        voters[msg.sender] = true;
        emit votedEvent(_id);
    }
}