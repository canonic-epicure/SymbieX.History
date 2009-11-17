Class('Symbie.Application', {
    
    use : 'Symbie',
    
    
    does : [ 'Symbie.ID' ],
    
    
    has : {
        root            : null
    },
    
    
    methods : {
        
        run : function (routePath) {
            
            this.setup()
            
            var me = this
            
            Ext.onReady(function() {
                me.onReady(routePath)
            })
        },
        
        
        //XXX not from root use case
        onReady : function (routePath) {
            this.root.dispatch(routePath).now()
        },
        
        
        setup : function () {
        }
        
    }
    
})