Class('App', {
    
    isa         : 'Symbie.Application',
    
    does        : 'SymbieX.History',
    
    trait       : 'JooseX.Class.Singleton',
    
    
    routes : {
        
        '/home' : function (context) {
            document.body.innerHTML = 'HOME'
            
            this.CONTINUE()
        },
        
        
        '/' : function (context) {
            document.body.innerHTML = 'INDEX'
            
            this.CONTINUE()
        },
        
        
        '/sample' : function (context) {
            document.body.innerHTML = 'SAMPLE'
            
            this.CONTINUE()
        },
        
        
        '/page' : function (context) {
            document.body.innerHTML = 'PAGE'
            
            this.CONTINUE()
        }
    }
    //eof routes
    
})