var allinp = document.querySelectorAll("input")
var allsel = document.querySelectorAll("select")
// console.log(allinp);
// console.log(allsel);
function storedata(){
    var fName = allinp[0].value;
    var lName = allinp[1].value;
    var phno = allinp[2].value;
    var email = allinp[3].value;
    var password = allinp[4].value;
    var confirmPass = allinp[5].value;
    var day = allinp[6].value;
    var mon = allinp[7].value;
    var year = allinp[8].value;

    localStorage.setItem("fName",fName);
    localStorage.setItem("lName",lName);
    localStorage.setItem("phno",phno);
    localStorage.setItem("email",email);
    localStorage.setItem("password",password);
    localStorage.setItem("confirmPass",confirmPass);
    localStorage.setItem("day",day);
    localStorage.setItem("mon",mon);
    localStorage.setItem("year",year);

    console.log(fName);

    open("../login.html")

    if (localStorage.getItem(password)==localStorage.getItem(confirmPass)) {

        document.getElementById("submbutt").removeAttribute("disbled")
    }
    else{
        document.getElementById("submbutt").setAttribute("disabled",'true')
    }
}

storedata();
