Class('Symbie.Meta.Route.Token.Parameter', {
    
    isa : 'Symbie.Meta.Route.Token',
    
    has : {
        name                : null,
        
        specificity         : 50,
        
        regex               : null
    },
    
    
    methods : {
        
        match : function (token) {
            return this.regex.exec(token)
        }
    }
    
})


