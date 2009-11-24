StartTest(function(t) {
    
    t.plan(9)
    
    var async0 = t.beginAsync()
    
    use([ 'App' ], function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(App.my, "App.my is here")
        

        //==================================================================================================================================================================================
        t.diag("Application setup")
        
        var async1 = t.beginAsync()
        
        
        App.my.__DOM_READY__ = true
        
        App.my.run('/').next(function () {
            
            //==================================================================================================================================================================================
            t.diag("Application launch - the '/' route path should be dispatched")
            
            var root = App.my.root
            var mnemonic = root.router.mnemonic
            var hash = mnemonic.getHash()
            
            t.ok(mnemonic.getCurrentToken() == '/', 'Current token is root path')
            
            t.ok(hash == null, 'Current hash value is correct - empty value')
            
            
            //==================================================================================================================================================================================
            t.diag("Switching widget in center")
            
            root.dispatch('/sample').next(function (context) {
                
                //==================================================================================================================================================================================
                t.diag("Activating Sample widget")
                
                var hash = mnemonic.getHash()
                
                t.ok(mnemonic.getCurrentToken() == '/sample', 'Current token is correct')
                
                t.ok(hash == '/sample', 'Current hash value is correct')
                
                
                //==================================================================================================================================================================================
                t.diag("Switching widget in center back")
                
                root.dispatch('/home').next(function (context) {
                    
                    //==================================================================================================================================================================================
                    t.diag("Activating Home widget")
                    
                    var hash = mnemonic.getHash()
                    
                    t.ok(mnemonic.getCurrentToken() == '/home', 'Current token is correct')
                    
                    t.ok(hash == '/home', 'Current hash value is correct')
                    
                    
                    mnemonic.back()
                    
                    setTimeout(function () {
                        
                        //==================================================================================================================================================================================
                        t.diag("Activating Sample widget via 'back'")
                        
                        var hash = mnemonic.getHash()
                        
                        t.ok(mnemonic.getCurrentToken() == '/sample', 'Current token is correct')
                        
                        t.ok(hash == '/sample', 'Current hash value is correct')
                        
                        t.endAsync(async1)
                        
                    }, 500)
                    
                })
                
            })
        })
        //eof run

      
        t.endAsync(async0)
    })
    
})