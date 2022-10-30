

function loginForm(){
    var name = document.getElementById("name");
    if(name.value == ""){
        document.getElementById("warningName").style.display = "block";
        document.getElementById("warningName").innerHTML = "* Hãy nhập tên!"
        return false;
    }else {
        document.getElementById("warningName").style.display = "none";
    }

    var pass = document.getElementById("pass");
    if(pass.value == ""){
        document.getElementById("warningPass").style.display = "block";
        document.getElementById("warningPass").innerHTML = "* Hãy nhập password!"
        return false;
    }else {
        document.getElementById("warningPass").style.display = "none";
    }


    var email = document.getElementById("email");
    var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
    if(email.value == ""){  
        document.getElementById("warningEmail").style.display = 'block';     
        document.getElementById("warningEmail").innerHTML = "* Hãy nhập email!";
        return false;
    }else if(!pattern.test(email.value)){
        document.getElementById("warningEmail").style.display = 'block';

        document.getElementById("warningEmail").innerHTML = "* Email phải đúng định dạng!"
        return false;
    }else{
        document.getElementById("warningEmail").style.display = 'none';
       
    }

    var thanhpho = document.getElementById("thanhpho");
    if(thanhpho.value == ""){
        document.getElementById("warningTp").style.display = "block";
        document.getElementById("warningTp").innerHTML = "* Hãy chọn thành phố!"
        return false;
    }else {
        document.getElementById("warningTp").style.display = "none";
    }

    var checkBoxs = document.querySelectorAll(".check");
    
    checkBoxs.forEach(element => {
        if(element.checked == false){
            document.getElementById("warningCheck").style.display = "block";
            document.getElementById("warningCheck").innerHTML = "* Hãy chọn bài theo dõi!"
            return false;
        }else{
            document.getElementById("warningCheck").style.display = "none";
        }
    });
        
}

var checkBox = document.querySelectorAll(".check");
checkBox.onchange = function(element){
    if(element.checked == false){
        document.getElementById("warningCheck").style.display = "block";
        return false;
    }else{
        document.getElementById("warningCheck").style.display = "none";
    }

}



function resetForm() {
    document.getElementById("myForm").reset();
}
   