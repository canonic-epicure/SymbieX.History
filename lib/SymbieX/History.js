Role('SymbieX.History', {
    
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
                skipRemember    : true
            }).now()
        }
    },
    
    
    
    continued : {
    
        override : {
            
            dispatch : function (params) { 
                if (typeof params == 'string') params = {
                    routePath : params
                }
                
                
                this.SUPER(params).THEN(function (context) {
                    
                    if (!params.skipRemember) this.mnemonic.remember(params.routePath)
                    
                    this.CONTINUE()
                }).NOW()
            }
            
        }
    }
    
    
})
