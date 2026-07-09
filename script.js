function login(){

let user=
document.getElementById("user").value;

let pass=
document.getElementById("pass").value;


if(user=="admin" && pass=="admin"){

location.href="dashboard.html";

}else{

document.getElementById("msg").innerHTML=
"❌ Datos incorrectos";

}

}