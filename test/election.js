var Election = artifacts.require("./Election.sol");

contract("Election",function(accounts){
    it("initializes with 3 candidates",function(){
        return Election.deployed().then(function(instance){
            return instance.candidatesCount()
        }).then(function(count){
            assert.equal(count,3);
        });
    });

    it("it initializes candidates with the correct values", function(){
        return Election.deployed().then(function(instance){
            election = instance;
            return election.candidates(1);
        }).then(function(can){
            assert.equal(can[0],1,"contains the correct id");
            assert.equal(can[1],"BJP","contains the correct name");
            assert.equal(can[2],0,"contains correct votes count");
            return election.candidates(2);
        }).then(function(can){
            assert.equal(can[0],2,"contains the correct id");
            assert.equal(can[1],"AAP","contains the correct name");
            assert.equal(can[2],0,"contains correct votes count");
            return election.candidates(3);
        }).then(function(can){
            assert.equal(can[0],3,"contains the correct id");
            assert.equal(can[1],"Congress","contains the correct name");
            assert.equal(can[2],0,"contains correct votes count");
        });
    });

});