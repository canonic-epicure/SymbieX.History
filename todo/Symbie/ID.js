Role('Symbie.ID', {
    
    traits : [ 'Symbie.Meta.ID' ],
    

    has : {
        ID                        : null,
        owner                     : null
    },
    
    
    methods : {
        
        computeID : function () {
            this.ID = this.meta.computeID(this.owner.ID, this)
        }
        
    }
    
})