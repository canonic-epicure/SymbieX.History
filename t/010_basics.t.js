StartTest(function(t) {
    
    var async0 = t.beginAsync()
    
    use([ 'App' ], function () {
        
        //==================================================================================================================================================================================
        t.diag("Sanity")
        
        t.ok(App, "App is here")
        
        var body    = document.body

        //==================================================================================================================================================================================
        t.diag("Application setup")
        
        var mnemonic
        
        App().run('/').then(function () {
            
            //==================================================================================================================================================================================
            t.diag("Application launch - the '/' route path should be dispatched")
            
            mnemonic = App().mnemonic
            
            t.ok(mnemonic.getCurrentToken() == '/', 'Current token is root path')
            t.ok(mnemonic.getHash() == null, 'Current hash value is correct - empty value')
            
            t.ok(/INDEX/.test(body.innerHTML), 'Correct `innerHTML` for initial route')
            
            this.CONTINUE()
            
        }).then(function () {
            
            setTimeout(this.getCONTINUE(), 0)
            
        }).then(function () {
            
            //==================================================================================================================================================================================
            t.diag("Switching widget in center")
            
            App().dispatch('/sample').andThen(function (context) {
                
                //==================================================================================================================================================================================
                t.diag("Activating Sample widget")
                
                t.ok(mnemonic.getCurrentToken() == '/sample', 'Current token is correct')
                t.ok(mnemonic.getHash() == '/sample', 'Current hash value is correct')
                
                t.ok(/SAMPLE/.test(body.innerHTML), 'Correct `innerHTML` for /sample route')
                
                this.CONTINUE()
            })
            
        }).then(function () {
            
            setTimeout(this.getCONTINUE(), 0)
            
        }).then(function () {
                
            //==================================================================================================================================================================================
            t.diag("Switching widget in center back")
            
            App().dispatch('/home').andThen(function (context) {
                    
                //==================================================================================================================================================================================
                t.diag("Activating Home widget")
                
                t.ok(mnemonic.getCurrentToken() == '/home', 'Current token is correct')
                t.ok(mnemonic.getHash() == '/home', 'Current hash value is correct')
                    
                t.ok(/HOME/.test(body.innerHTML), 'Correct `innerHTML` for /home route')
                    
                this.CONTINUE()
            })
            
        }).then(function () {
            
            //==================================================================================================================================================================================
            t.diag("Activating Sample widget via 'back'")
            
            mnemonic.back()
            
            setTimeout(this.getCONTINUE(), 500)
            
        }).then(function () {
            
            t.ok(mnemonic.getCurrentToken() == '/sample', 'Current token is correct')
            t.ok(mnemonic.getHash() == '/sample', 'Current hash value is correct')
            
            t.ok(/SAMPLE/.test(body.innerHTML), 'Correct `innerHTML` for /sample route')
            
            t.endAsync(async0)
            t.done()
        
        }).now()
    })
    
})