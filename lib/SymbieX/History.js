Role('SymbieX.History', {
    
    trait       : 'JooseX.CPS',
    
    use         : 'Johnny.Mnemonic',
    
    
    has : {
        mnemonic        : null
    },
    
    
    methods : {

        onStateChange : function (mnemonic, token) {
            //exception from this dispatch can only be handled with 'dispatchException' event
            this.dispatch({
                path            : token,
                skipHistory     : true
            }).now()
        }
    },
    
    
    
    continued : {
    
        override : {
            
            launch : function (initialPath) {
                var CONT        = this.getCONTINUE()
                var SUPER       = this.SUPER
                
                var me          = this

                var mnemonic    = this.mnemonic = new Johnny.Mnemonic(
                    Joose.O.copy(this.getConfigFor('SymbieX.History'), {
                        defaultToken    : initialPath
                    })
                )                
                
                //temporary listener, for the initial dispatch only
                mnemonic.on('statechange', function (mnemonic, token) {
                    
                    TRY(function () {
                        
                        //handling initial dispatch specially, to pass the result to the outer context
                        SUPER.call(me, {
                            path            : token,
                            skipHistory     : true
                        }).then(CONT).now()
                        
                    }).now()
                    
                    //permanent listener
                    mnemonic.on('statechange', this.onStateChange, this)
                    
                }, this, { single : true })
                
                mnemonic.setup()
            },
            
            
            dispatch : function (params) {
                
                this.SUPER(params).andThen(function (context) {

                    var params = context.dispatchParams
                    
                    //XXX !context.redirected is a hack to support redirects from the `via` function of route
                    if (!params.skipHistory && !context.redirected) this.mnemonic.remember(params.path)
                    
                    this.CONTINUE()
                })
            }
            
        }
    }
    
    
})
