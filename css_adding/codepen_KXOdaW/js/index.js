// $("#animation_container").ready(function() {
//    $("#instance-btn_1").click(function() {
//       myFunction();
//       var depart = 2;
//       console.log(depart * depart);
//    });
// });
// var depart = 1;
// var a = depart + depart;
// var b = a * (2 + depart);
// var c = a * b - depart;
// function myFunction() {
//    console.log((a + b) * depart / c);
// }

var bodyObj, className, index;

bodyObj = document.getElementById('instance-btn_1');
index = 1;
className = [
    'ui-button',
    'ui-button1'
];


function updateIndex(){
    if(index === 0){
        index = 1;
    }else{
        index = 0;
    }
}

bodyObj.onclick = function(e){
    e.currentTarget.className = className[index];
    updateIndex();
}