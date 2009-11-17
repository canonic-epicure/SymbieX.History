Role('Symbie.Router.Default', {
    
    trait : 'Symbie.Meta.Router',
    
    
    routes : {
        
        'default' : {
            
            mapTo : '/*',
                
            via : function (context) {
                throw "Route [" + context.getRoute().mapTo + "] was mapped to abstract route" 
            }
        }
        
    }
       
})
