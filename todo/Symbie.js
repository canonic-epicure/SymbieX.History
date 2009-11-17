Class('Symbie', {
    
    my : {
        
        methods : {
            
            fullLocationPath : function () {
                var loc = window.location
                
                var prefix = Ext.escapeRe(loc.protocol + '//' + loc.hostname)
                
                return loc.href.replace(new RegExp('^' + prefix), '')
            }
        }
    }
    
})