Class('Symbie.Meta.Route.Match', {
    
    has : {
        route                   : null,
        
        currentTokenIndex       : 0,
        
        parameters              : Joose.Object,
        
        path                    : Joose.Array
    },
    
    
    methods : {
        
        consumeToken : function (token) {
            var currentToken = this.route.tokens[this.currentTokenIndex]
            
            if (currentToken instanceof Symbie.Meta.Route.Token.WildCard) {
                this.path.push(token)
                
                return true
            }
            
            this.currentTokenIndex++
            
            if (currentToken instanceof Symbie.Meta.Route.Token.String)
                return currentToken.match(token)
            
            if (currentToken instanceof Symbie.Meta.Route.Token.Parameter) {
                var match = currentToken.match(token)
                
                if (match) {
                    var paramName = currentToken.name
                    var parameters = this.parameters
                    
                    if (match[1] != null && match[2] != null) 
                        parameters[paramName] = match
                    else
                        if (match[1] != null)
                            parameters[paramName] = match[1]
                        else
                            parameters[paramName] = token
                }
                
                return match
            }
            
            return false
        },
        
        
//        matchedFullPath : function () {
//            var currentToken = this.route.tokens[this.currentTokenIndex]
//            
//            return (currentToken instanceof Symbie.Meta.Route.Token.WildCard) || this.currentTokenIndex == this.route.tokens.length 
//        },
        
        
        compareBySpecificity : function (another) {
            
            var thisTokens      = this.route.tokens
            var anotherTokens   = another.route.tokens
            
            if (thisTokens.length < anotherTokens.length) return -1
            if (thisTokens.length > anotherTokens.length) return 1
            
            for (var i = 0; i < thisTokens.length; i++ ) {
                
                var specDiff = thisTokens[i].specificity - anotherTokens[i].specificity
                
                if (specDiff) return specDiff
            }
            
            return 0
        }
    }
    
})
