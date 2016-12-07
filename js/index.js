$(document).ready(function(){
  var output = "";
  var str = "";
  $('#ac').click(function(){
    $("#input").text("");
    output = "";
    $('#story').text('');
  });
  
  $('#1').click(function(){
    $('#input').append('1');
     output=output.concat("1"); 
  });
  $('#2').click(function(){
    $('#input').append('2');
     output=output.concat("2"); 
  });
  $('#3').click(function(){
    $('#input').append('3');
   output=output.concat("3"); 
  });
  $('#4').click(function(){
    $('#input').append('4');
    output=output.concat("4"); 
  });
  $('#5').click(function(){
    $('#input').append('5');
    output=output.concat("5"); 
  });
  $('#6').click(function(){
    $('#input').append('6');
    output=output.concat("6"); 
  });
  $('#7').click(function(){
    $('#input').append('7');
   output=output.concat("7"); 
  });
  $('#8').click(function(){
    $('#input').append('8');
     output=output.concat("8"); 
  });
  $('#9').click(function(){
    $('#input').append('9');
     output=output.concat("9"); 
  });
  $('#0').click(function(){
    $('#input').append('0');
    output=output.concat("0"); 
  });
  $('#dot').click(function(){
    $('#input').append('.');
    output=output.concat("."); 
  });
  // $('#coma').click(function(){
  //   $('#input').append(',');
  //   output.push(","); 
  // });
  $("#result").click(function(){// =
    console.log(output);
     $("#input").text('');
    
    ///console.log(output);
   
     $("#story").text("");
    
    $("#story").text(output);
    check();
    $("#input").text(output);
  });
  $("#del").click(function(){//DEL
    console.log(output);
    output= output.slice(0,-1);
    console.log(output);
    $('#input').text(function (_,txt) {
       
      return txt.slice(0, -1);
      
});
    
  });
  
  $('#plus').click(function(){
    $('#input').append("+");//PLUS
     output=output.concat("+"); 
     $("#input").text('');
     $("#story").text(output);
    error();
  });
  
  $('#minus').click(function(){
    $('#input').append('-');//MINUS
     output=output.concat("-"); 
    $("#input").text('');
     $("#story").text(output);
    //error()
  });
  
    $('#x').click(function(){
    $('#input').append('*');//X
     output=output.concat("*"); 
    $("#input").text('');
     $("#story").text(output);
      //error();
  });
  
    $('#entre').click(function(){
    $('#input').append('/');//ENTRE
      // if($.isArray(output) === false){
      //  output= output.split('');
      //   console.log("here");
      // }
    output=output.concat("/");  
    $("#input").text('');
     $("#story").text(output);
      //error();
      
  });
  
  
  $('#off').click(function(){
    if($("#display").hasClass("on")){
     $('#off').text("Off")
    }else{
      $('#off').text("On");
    }
    $("#display").toggleClass("on");
  });
  
  
  function check(){

    output=output.toString();
   
   
   output= ((eval(output).toFixed(2) ) )
   //console.log((output) );
    output=output.toString();
    return output;
  }
  
  function clean(){
    
    if($("#story")!= ""){
      $("#story").text(''); 
    }
  }
  
});