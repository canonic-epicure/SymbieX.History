Role('SymbieX.History.Router', {
    
    traits      : [ 'JooseX.CPS' ],
    
    use : 'Johnny.Mnemonic',
    
    
    has : {
        mnemonic        : null
    },
    
    
    methods : {

        onStateChange : function (mnemonic, token) {
            //exception from this dispatch can only be handled with 'dispatchException' event
            this.dispatch({
                routePath       : token,
                skipHistory     : true
            }).now()
        }
    },
    
    
    
    continued : {
    
        override : {
            
            launch : function (initialPath) {
                var CONT = this.getCONTINUE()
         
                var mnemonic = this.mnemonic = new Johnny.Mnemonic({
                    defaultToken : initialPath
                })
                
                //temporary listener, for the initial dispatch only
                mnemonic.on('statechange', function (mnemonic, token) {
                    
                    //handling initial dispatch specially, to pass the result to the outer context
                    this.dispatch({
                        routePath       : token,
                        skipHistory     : true
                    }).next(CONT)
                    
                    //permanent listener
                    mnemonic.on('statechange', this.onStateChange, this)
                    
                }, this, { single : true })
                
                mnemonic.setup()
            },
            
            
            dispatch : function (params) {
                
                if (typeof params == 'string') params = {
                    routePath : params
                }
                
                this.SUPER(params).THEN(function (context) {
                    if (!params.skipHistory) this.mnemonic.remember(params.routePath)
                    
                    this.CONTINUE()
                }).NOW()
            }
            
        }
    }
    
    
})
