Class('Symbie.Context.Step', {
    
    trait : 'JooseX.CPS',
    
    has : {
        context         : { required : true },
        
        parent          : null,
        childSteps      : Joose.Array
    },
    
    
    methods : {
        
        addChild : function (step) {
            step.parent = this
            
            this.childSteps.push(step)
            
            return step
        },
        
        
        each : function (func, scope) {
            func.call(scope || this, this)
            
            Joose.A.each(this.childSteps, function (step) {
                step.each(func, scope)
            })
        },
        
        
        eachR : function (func, scope) {
            var childSteps = this.childSteps
            
            for (var i = childSteps.length - 1; i >= 0; i--) childSteps[i].eachR(func, scope)
                
            func.call(scope || this, this)
        },
        
        
        getUsedClasses : function () {
            return []
        },
          
        
        prepareStepSync : function () {
        },
        
        
        activateStep : function () {
            throw "Abstract method 'activateStep' was called on [" + this + "]"
        },

        
        finalizeStep : function () {
        },
        
        
        mark : function (markName) {
            this.context.saveMark(markName, this)
            
            return this
        }
    },
    
    
    continued : {
        
        methods : {
            
            prepareStepAsync : function () {
                this.CONTINUE()
            }
        }
    }
    
})