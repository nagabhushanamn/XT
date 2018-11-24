


// var o={
//     doWork:function(){
//         console.log("im mod1");  
//     }
// }

//--------------------------------------------------------
var sapient = sapient || {};
(function () {
    sapient.mod2.doWork();
    var i = 0;
    var o = {
        doWork: function () {
            console.log("im mod1");
        }
    }
    sapient.mod1 = o
})();