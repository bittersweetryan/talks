//jasmine
describe( 'todos', function(){
    
    var todos;
    
    beforeEach( function(){
        todos = new Todos( $('<ul/>'), $('<input type="text" value="foobar" />'));
    });
    
    it('should create an instance', function(){
        expect( typeof todos).toEqual( 'object' );
    });
    
    it('should have an getData function', function( ){
        expect(typeof todos.getData).toEqual('function');
    });
    
    it('getData should async return an array', function( done ){
        
        var callback = function( items ){
            expect(items instanceof Array ).toBeTruthy();
            done();
        };
        
        todos.getData( callback );
    });
    
    it('should have a addItem function', function(){
        expect( typeof todos.addItem ).toEqual( 'function' );
    });
    
    it('should try to add an item to the DOM', function(){
        spyOn( jQuery.fn, 'append' );
        
        todos.addItem( 'Learn JS Testing' );
        
        expect( jQuery.fn.append )
            .toHaveBeenCalledWith( '<li class="todo-item">Learn JS Testing</li>' );
    });
    
    it('should have a addItems function', function(){
        spyOn( todos, 'addItem' );
        
        todos.addItems( [{name:'foo'},{name:'bar'},{name:'baz'}] );
        
        expect( todos.addItem ).toHaveBeenCalledWith( 'foo' );
        expect( todos.addItem ).toHaveBeenCalledWith( 'bar' );
        expect( todos.addItem ).toHaveBeenCalledWith( 'baz' );
    });
    
    it('should have a handleKeypress function', function(){
        expect( typeof todos.handleKeypress ).toEqual( 'function' );
    });
    
    it('should handle a keypress', function(){
        spyOn( todos, 'addItem' );
        
        todos.handleKeypress( { which: 13 } );
        
        expect( todos.addItem ).toHaveBeenCalledWith( 'foobar' );
    });
    
    it('should have an init method', function(){
        expect( typeof todos.init ).toEqual( 'function' );
    });
    
    it('should setup a handler and additems', function(){
        spyOn( jQuery.fn, 'on' );
        spyOn( todos, 'getData' );
        
        todos.init();
        
        expect( jQuery.fn.on ).toHaveBeenCalled();
        expect( todos.getData ).toHaveBeenCalledWith( todos.addItems );
    } );
});


