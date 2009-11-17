Role('Symbie.Meta.Router', {
    
    use : [ 'Symbie.Meta.Route' ],
    
    
    has : {
        routes        : null,
        routesMC      : Joose.FutureClass('Symbie.Meta.Route')
    },
    
    
    methods : {
        
        hasRoute : function (name) {
            return this.stem.properties.routes.haveProperty(name)
        },
        
        
        getRoute : function (name) {
            return this.stem.properties.routes.getProperty(name)
        }
    },
    
    
    before : {
        processStem : function () {
            var superMeta = this.superClass.meta
            
            this.routes = Joose.O.getMutableCopy(superMeta.routes || {})
        }
    },
    
    
    stem : {
        
        after : {
            
            initialize : function () {
                this.processOrder = this.processOrder.concat('routes')
                
                var targetMeta = this.targetMeta
                
                //will be Joose.Managed.PropetySet.Mutable
                this.addProperty('routes', {
                    properties : targetMeta ? targetMeta.routes : {}
                })
            }
        }
    },
    
    
    builder : {
        
        methods : {
            
            routes : function (meta, info) {
                var routes = meta.stem.properties.routes
                
                Joose.O.each(info, function (value, name) {
                    value.meta = value.meta || meta.routesMC
                    
                    routes.addProperty(name, value)
                })
            }
        }
    }
})