Class('Symbie.Meta.Route', {
    
    meta : Joose.Meta.Class,
    
    isa : Joose.Managed.Property,
    
    use : [ 'Symbie.Meta.Route.Token.String', 'Symbie.Meta.Route.Token.Root', 'Symbie.Meta.Route.Token.Parameter', 'Symbie.Meta.Route.Token.WildCard' ],
    
    
    has : {
        mapTo                   : null,
        
        where                   : null,
        
        via                     : null,
        
        tokens                  : Joose.Array
    },
    
    
    after : {
        
        initialize : function (properties) {
            //Joose.Managed.Property do not inherit from Joose.Meta.Object, need to call this for advanced attributes initialization
            Joose.Meta.Object.prototype.initialize.call(this, properties)
            
            var tokens = typeof this.mapTo == 'string' && this.mapTo.split('/') || []
            
            Joose.A.each(tokens, function (token, index) {
                this.tokens.push(this.createToken(token, index))
            }, this)
        }
    },
    
    
    methods : {
        
        createToken : function (token, index) {
            if (token == '' && !index)      return new Symbie.Meta.Route.Token.Root()
            
            if (/^\*/.test(token))          return new Symbie.Meta.Route.Token.WildCard()
            
            if (/^:/.test(token)) {
                var name = /^:(.*)/.exec(token)[1]
                
                var regex = this.where && this.where[name] || /(.*)/
                
                return new Symbie.Meta.Route.Token.Parameter({ token : token, name : name, regex : regex })
            }
            
            return new Symbie.Meta.Route.Token.String({ token : token })
        },
        
        
        prepareApply : function (target) {
        },
        
        
        apply : function (target) {
        },
        
        
        unapply : function (from) {
        }
    }
    
})
