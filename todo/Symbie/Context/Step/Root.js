Class('Symbie.Context.Step.Root', {
    
    isa : 'Symbie.Context.Step.Widget',
    
    
    methods : {
        
        getUsedClasses : function () {
            return []
        },
        
        
        prepareStepSync : function () {
            this.widget = this.context.router.root
        },
        
        
        activateStep : function () {
        },

        
        finalizeStep : function () {
            this.widget.doLayout()
        }
        
    }
})