User.prototype.getUsers = function(){
    //look at our app code for this
};

it('should get a list of users and add them', function(){
    spyOn(User, 'getUsers').andReturn(
        [
            { 
                firstName : 'Ryan',
                lastName  : 'Anklam'
            }
        ]
    );
    
    spyOn(User, 'addUserToList');
    
    user.listUsers();
    
    expect(user.getUsers).toHaveBeenCalled();
    expect(user.addUserToList).toHaveBeenCalled();
});
