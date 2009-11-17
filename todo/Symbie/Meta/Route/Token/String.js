Class('Symbie.Meta.Route.Token.String', {
    
    isa : 'Symbie.Meta.Route.Token',
    
    has : {
        specificity         : 100
    },
    
    
    methods : {
        
        match : function (token) {
            return token == this.token
        }
    }
    
})


