Role('Symbie.Widget.Root', {
    
    does : [ 'Symbie.Widget' ],
    
    has : {
        router              : { is : 'rw' },
        
        routerClass         : { required : true }
    },
    
    
    after : {
        initialize : function () {
            this.computeID()
            
            this.router = new this.routerClass({
                root : this
            })
        }
    },
    
    
    methods : {
        
        getRouter : function () {
            return this.router
        }
        
    }
    
    
})
