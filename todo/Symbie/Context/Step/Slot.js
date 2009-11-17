Class('Symbie.Context.Step.Slot', {
    
    isa : 'Symbie.Context.Step.Widget',
    
    has : {
        slotName       : null
    },
    
    
    methods : {
        
        getContainer : function () {
            return this.container
        },
        
        
        setContainer : function (value) {
            this.container = value
        },
        
        
        getWidget : function () {
            return this.parent.getWidget()
        },
        
        
        setWidget : function () {
            throw "Step [" + this + "] can't contain widgets"
        },
        
        
        getUsedClasses : function () {
            return []
        },
        
        
        prepareStepSync : function () {
            var container   = this.parent.getContainer()
            var slotName    = this.slotName
            
            if (!container.slots) throw "Container [" + container + "] have no slots"
            
            var slot = container.slots[slotName]
            
            if (!slot) throw "Container [" + container + "] have no [" + slotName + "] slot"
            
            this.container = slot
        },
        
        
        activateStep : function () {
        },

        
        finalizeStep : function () {
        }
        
    }
    
})