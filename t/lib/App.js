Class('App', {
    
    isa         : 'Symbie.Application',
    
    plugins     : {
        'SymbieX.History' : {
            hashFrom    : 'window'
        }
    },
    
    trait       : 'JooseX.Class.Singleton',
    
    
    routes : {
        
        '/home' : function (context) {
            context.stash.content.innerHTML = 'HOME'
            
            this.CONTINUE()
        },
        
        
        '/' : function (context) {
            context.stash.content.innerHTML = 'INDEX'
            
            this.CONTINUE()
        },
        
        
        '/sample' : function (context) {
            context.stash.content.innerHTML = 'SAMPLE'
            
            this.CONTINUE()
        },
        
        
        '/page' : function (context) {
            context.stash.content.innerHTML = 'PAGE'
            
            this.CONTINUE()
        }
    },
    //eof routes
    
    
    continued : {
        
        methods : {
            
            BEGIN : function (context) {
                var content = document.getElementById('content')
                
                if (!content) {
                    content = document.createElement('div')
                    
                    content.id = 'content'
                    
                    document.body.appendChild(content)
                }
                
                context.stash.content = content
                
                this.CONTINUE()
            }
        }
    }
})