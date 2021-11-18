for (let j = 0; j < localStorage.length; j++) {
    $("#tab").append(localStorage.getItem(j));
}

var myStorage = window.localStorage;

$("button").click(function(){
    var input= $("#num1");
    var input2= $("#num2");
    var sign = $(this).val();
    if(input.val() && input2.val()){
        var n1 = parseInt(input.val());
        var n2 = parseInt(input2.val());
        var tot;

        switch (sign) {
            case "+":
                tot = n1 + n2;
                break;
            case "-":
                tot = n1 - n2;
                break;
            case "*":
                tot = n1 * n2;
                break;
            case "/":
                tot = n1 / n2;
                break;
        };
        var string ="<tr><td>" + n1 + "</td><td> "+ sign +" </td><td>"+ n2 +"</td><td>"+ tot +"</td></tr>";
        localStorage.setItem(localStorage.length, string); 
        $("#tab").append(string);
        input.val("");
        input2.val("");
    } 
});


/*
$("#btn1").click(function(){ operation("+")});

var operation = function (sign) {
    var input= $("#num1");
    var input2= $("#num2");
    if(input.val() && input2.val()){
        var n1 = parseInt(input.val());
        var n2 = parseInt(input2.val());
        var tot;

        switch (sign) {
            case "+":
                tot = n1 + n2;
                break;
            case "-":
                tot = n1 - n2;
                break;
            case "*":
                tot = n1 * n2;
                break;
            case "/":
                tot = n1 / n2;
                break;

        };
        var string ="<tr><td>" + n1 + "</td><td> "+ sign +" </td><td>"+ n2 +"</td><td>"+ tot +"</td></tr>";
        $("#tab").append(string);
        input.val("");
        input2.val("");
    } 
}
*/