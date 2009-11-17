Role('SymbieX.History.Router', {
    
    traits      : [ 'JooseX.CPS' ],
    
    use : 'Johnny.Mnemonic',
    
    
    has : {
        mnemonic        : null
    },
    
    
    methods : {

        onStateChange : function (mnemonic, token) {
            this.dispatch({
                routePath       : token,
                skipHistory     : true
            }).now()
        },
        
        
        setupHistory : function (routePath) {
            
            var mnemonic = this.mnemonic = new Johnny.Mnemonic({
                defaultToken : routePath
            })
            
            mnemonic.on('statechange', this.onStateChange, this)
            
            mnemonic.setup()
        }
    },
    
    
    
    continued : {
    
        override : {
            
            dispatch : function (params) {
                
                if (typeof params == 'string') params = {
                    routePath : params
                }
                
                //XXX somehow keep the scope in CPS no matter what )
                var me = this
                
                this.SUPER(params).THEN(function (context) {
                    
                    if (!params.skipHistory) me.mnemonic.remember(params.routePath)
                    
                    this.CONTINUE()
                }).NOW()
            }
            
        }
    }
    
    
})
