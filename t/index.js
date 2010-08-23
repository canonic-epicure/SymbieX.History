var Harness = Test.Run.Harness.Browser.ExtJS
    
var INC = [ '../lib', '/jsan' ]


Harness.configure({
    title       : 'SymbieX.History Test Suite',
    
    keepResults : true,
    
    preload     : [
    
        '=/jsan/Task/Joose/Core.js',
        "=/jsan/Task/ExtJS/Adapter/Ext.js",
        '=/jsan/JooseX/Bridge/Ext.js',
        '=/jsan/JooseX/Bridge/Ext/Convertor.js',
        "=/jsan/Task/ExtJS/All.js",
        
        "=/jsan/ExtX/Reference/Slot.js",
        
        "=/jsan/JooseX/SimpleRequest.js",
        '=/jsan/Task/JooseX/Namespace/Depended/Web.js',
        {
            text : "JooseX.Namespace.Depended.Manager.my.INC = " + Ext.encode(Harness.absolutizeINC(INC))
        }
    ]
})


Harness.start(
    {
        url         : '010_basics.t.js',
        target      : 'Window'
    }
)




//
//
//
//var INC = []
//Joose.A.each([ 'lib', '../lib', '/jsan' ], function (path) {
//    INC.push(Test.Run.Harness.Browser.Multi.my.resolveUrl(path, true))
//}) 
//
//
//Test.Run.Harness.Browser.Multi.my.configure({
//    title : 'Symbie test suite',
//    
//    passThroughEx : true,
//    
//    keepWindows : true,
//    
//    preload : [
//        '/jsan/Task/Joose/Core.js',
//        "/jsan/Task/ExtJS/Adapter/Ext.js",
//        '/jsan/JooseX/Bridge/Ext.js',
//        '/jsan/JooseX/Bridge/Ext/Convertor.js',
//        "/jsan/Task/ExtJS/All.js",
//        
//        "/jsan/ExtX/Reference/Slot.js",
//        
//        "/jsan/JooseX/SimpleRequest.js",
//        '/jsan/Task/JooseX/Namespace/Depended/Web.js',
//        {
//            text : "JooseX.Namespace.Depended.Manager.my.INC = " + Ext.encode(INC)
//        }
//    ]
//})
//
//
//Test.Run.Harness.Browser.Multi.my.start(
//    {
//        url         : '010_basics.t.js',
//        target      : 'window'
//    }
//)
