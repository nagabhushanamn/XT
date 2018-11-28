


// var o={
//     doWork:function(){
//         console.log("im mod1");  
//     }
// }

//--------------------------------------------------------
var sapient = sapient || {};
(function () {
    var o = {
        doWork: function () {
            console.log("im mod2");
        }
    }
    sapient.mod3 = o;
})();