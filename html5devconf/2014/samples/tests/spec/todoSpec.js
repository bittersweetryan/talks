describe( 'todos', function(){
    
    var todos;
    
    beforeEach( function(){
        todos = new App();
    });
    
    it('should create an instance', function(){
        expect( typeof todos).toEqual( 'object' );
    });
    
    it('should have a getData function', function(){
        expect(typeof todos.getData).toEqual('function');
        
        expect(todos.getData() instanceof Array).toBeTruthy();
    });
    
    it('should have a addItem function', function(){
        
    });
    
    it('should have a addItems function', function(){
        spyOn( todos, 'addItem' );
        todos.addItems( ['a','b','c'] );
        
        expect( todos.addItem ).toHaveBeenCalled();
    });
});
