Role('SymbieX.History.Application', {
    
    
    override : {
        
        onReady : function () {
            this.root.router.setupHistory()
        }
    }
    
})