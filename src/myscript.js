userarray = [];
 
$(document).ready(function(){
    $("#msgUser").hide();
    $("#msgPass").hide();
    $("#msgSubmit").hide();
    $("#btnSubmit").on('click',function(){

        var user = document.getElementById("userIn").value;
        var pass = document.getElementById("passIn").value;
   
    
     var obj1 ={
         user : user ,
         pass :pass ,
     };
     if(!(/^[a-zA-Z]+$/.test(user)) )
     {
        $("#msgUser").show();
        $("#msgUser").css("color","red");
        $("#msgUser").text(" Use alphabets only").fadeOut(3000);
        
     } 
     else if (  !(/^[a-zA-Z]+$/.test(pass))){
        $("#msgPass").show();
        $("#msgPass").css("color","red");
        $("#msgPass").text(" Use alphabets only").fadeOut(3000);
     }
     

     else if (user == "" && pass ==""){
        $("#msgUser").show();
        $("#msgUser").css("color","red");
        $("#msgUser").text(" field cannot be left Blank").fadeOut(3000);
        $("#msgPass").show();
        $("#msgPass").css("color","red");
        $("#msgPass").text(" field cannot be left Blank").fadeOut(3000);


     }
     else{
        userarray.push(obj1);
        display(userarray);
        $("#msgSubmit").show();
        $("#msgSubmit").css("color","green");
        $("#msgSubmit").text(" Submission Successful").fadeOut(3000);



     }
    
     
    });
});


function display(){
  
  
    var html =
      "<table> <tr> <th> User name</th> </t> <th>   Password</th>  </th> ";
    for (let i = 0; i < userarray.length; i++) {
      html +=
        "<tr><td>" +
        userarray[i].user +
        "</td><td>" +
        userarray[i].pass +
        "</td> </tr>";
       
      }
    html += "</table>";
   
    document.getElementById("tblUser").innerHTML = html;
  }
