Role('Symbie.Widget', {
    
    requires : [ 'initComponent' ],
    
    traits : [ 'Symbie.Meta.Widget', 'JooseX.CPS' ],
    
    does : [ 'Symbie.ID' ],
    
    use : 'Digest.MD5',

    
    
    continued : {
    
        methods : {
            
            setup : function () {
                this.CONTINUE()
            },
            
            
            dispatch : function (routePath) {
                var router = this.getRouter()
                
                router.attachScope(this).dispatch(routePath).now()
            }
        }
    },
    
    
//    after : {
//        
//        initialize : function (props) {
//            
//            
//        }
//    },
    
    
    methods : {
        
        getRouter : function () {
            return this.owner.getRouter()
        },
        
        
        highlight : function () {
            this.getEl().highlight()
        }
    }
    
})