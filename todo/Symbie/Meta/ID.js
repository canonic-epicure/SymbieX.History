Role('Symbie.Meta.ID', {
    
    use : 'Digest.MD5',
    
    
    has : {
        idDefinition : Joose.Array
    },
    
    
    builder : {
        
        methods : {
            
            id : function (targetMeta, info) {
                
                var id      = targetMeta.idDefinition
                var props   = {}
                
                Joose.O.each(info, function (value, name) {
                    if (typeof value != 'object' || value == null) value = { init : value }
                    
                    value.required = true
                    props[name] = value
                    
                    id.push(name)
                })
                
                this.has(targetMeta, props)
                
                id.sort()
            }
        }
    },
    
    
    methods : {
        
        computeID : function (ownerID, source) {
            var idMaterial = this.name + ':' + ownerID
            
            Joose.A.each(this.idDefinition, function (attrName) {
                idMaterial += ':' + source[attrName]
            }, this)
            
            return Digest.MD5.my.md5_hex(idMaterial)
        }
        
    }
})