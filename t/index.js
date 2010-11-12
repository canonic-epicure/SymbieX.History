var Harness = Test.Run.Harness.Browser.ExtJS
    
var INC = [ 'lib', '../lib', '/jsan' ]


Harness.configure({
    title       : 'SymbieX.History Test Suite',
    
    keepResults : true,
    
    preload     : [
        'jsan:Task.Symbie.Bundle',
        {
            text : "JooseX.Namespace.Depended.Manager.my.INC = " + Harness.prepareINC(INC)
        },
        'jsan:Jonny.Mnemonic',
        
        'SymbieX.History'
    ]
})


Harness.start(
    {
        url         : '010_basics.t.js',
        target      : 'Window'
    }
)