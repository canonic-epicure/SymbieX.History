Class('App', {
    
    my : {
    
        isa : 'Symbie.Application',
        
        
        use : [ 'App.Widget.Root' ],
        
        has : {
            ID                  : 'App'
            
        },
        
        
        methods : {
            
            seed : function () {
                this.root = new App.Widget.Root({
                    owner : this
                })
            }
        }
    }
})