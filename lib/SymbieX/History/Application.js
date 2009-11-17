Role('SymbieX.History.Application', {
    
    
    override : {
        
        onReady : function (routePath) {
            this.root.router.setupHistory(routePath)
        }
    }
    
})