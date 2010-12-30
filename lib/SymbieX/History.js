Role('SymbieX.History', {
    
    trait       : 'JooseX.CPS',
    
    use         : 'Johnny.Mnemonic',
    
    
    has : {
        mnemonic        : null
    },
    
    
    methods : {

        onStateChange : function (event, token) {
            //exception from this dispatch can only be handled with 'dispatchException' event
            this.dispatch({
                path            : token,
                skipHistory     : true
            }).now()
        }
    },
    
    
    override : {
        
        FINALIZE : function (context) {
            var params = context.dispatchParams
            
            //XXX !context.redirected is a hack to support redirects from the `via` function of route
            if (!params.skipHistory && !context.redirected) this.mnemonic.remember(params.path)
                
            this.SUPER(context)
        }
    },
    
    
    
    continued : {
    
        override : {
            
            launch : function (initialPath) {
                // trying hard to call the SUPER launch method, instead of directly `dispatch`
                // this should allow other extensions to also override the `launch`
                
                var CONT        = this.getCONTINUE()
                var SUPER       = this.SUPER
                
                var mnemonic    = this.mnemonic = new Johnny.Mnemonic(
                    Joose.O.copy(this.getConfigFor('SymbieX.History') || {}, {
                        defaultToken    : initialPath
                    })
                )                
                
                //temporary listener, for the initial dispatch only
                mnemonic.on('statechange', function (event, token) {
                    
                    //permanent listener
                    mnemonic.on('statechange', this.onStateChange, this)

                    //handling initial dispatch specially, to pass the result to the outer context
                    TRY(function () {
                        
                        SUPER.call(this, {
                            path            : token,
                            skipHistory     : true
                        }).andThen(CONT)
                        
                    }, this).now()
                    
                }, this, { single : true })
                
                
                mnemonic.setup()
            }
        }
    }
})