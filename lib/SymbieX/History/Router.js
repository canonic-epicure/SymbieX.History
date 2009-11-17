Role('SymbieX.History.Router', {
    
    traits      : [ 'JooseX.CPS' ],
    
    use : 'Johnny.Mnemonic',
    
    
    has : {
        mnemonic        : function () {
            
            return new Johnny.Mnemonic({
                defaultToken : '/'
            })
        }
    },
    
    
    after : {
        initialize : function () {
            this.mnemonic.on('statechange', this.onStateChange, this)
        }
    },
    
    
    methods : {

        onStateChange : function (mnemonic, token) {
            this.dispatch({
                routePath       : token,
                skipHistory     : true
            }).now()
        },
        
        
        setupHistory : function () {
            this.mnemonic.setup()
        }
    },
    
    
    
    continued : {
    
        override : {
            
            dispatch : function (params) {
                
                if (typeof params == 'string') params = {
                    routePath : params
                }
                
                //XXX keep the scope in CPS
                var me = this
                
                this.SUPER(params).THEN(function (context) {
                    
                    if (!params.skipHistory) me.mnemonic.remember(params.routePath)
                    
                    this.CONTINUE()
                }).NOW()
            }
            
        }
    }
    
    
})
