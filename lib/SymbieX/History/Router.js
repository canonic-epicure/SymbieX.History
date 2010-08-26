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
                var CONT    = this.getCONTINUE()
                var SUPER   = this.SUPER
         
                var mnemonic = this.mnemonic = new Johnny.Mnemonic({
                    defaultToken : initialPath
                })
                
                //temporary listener, for the initial dispatch only
                mnemonic.on('statechange', function (mnemonic, token) {
                    
                    //handling initial dispatch specially, to pass the result to the outer context
                    SUPER.call(this, {
                        routePath       : token,
                        skipHistory     : true
                    }).then(CONT).now()
                    
                    //permanent listener
                    mnemonic.on('statechange', this.onStateChange, this)
                    
                }, this, { single : true })
                
                setTimeout(function () {
                    mnemonic.setup()
                }, 0)
            },
            
            
            dispatch : function (params) {
                
                if (typeof params == 'string') params = {
                    routePath : params
                }
                
                this.SUPER(params).andThen(function (context) {
                    
                    //XXX !context.redirected is a hack to support redirects from the `via` function of route
                    if (!params.skipHistory && !context.redirected) this.mnemonic.remember(params.routePath)
                    
                    this.CONTINUE()
                })
            }
            
        }
    }
    
    
})
