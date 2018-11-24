


// var o={
//     doWork:function(){
//         console.log("im mod2");  
//     }
// }

//--------------------------------------------------------
var sapient = sapient || {};
(function () {
    sapient.mod3.doWork();
    var o = {
        doWork: function () {
            console.log("im mod2");
        }
    }
    sapient.mod2 = o;
})();