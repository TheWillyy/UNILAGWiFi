 function manualSignIn(){
    alert('You Have to be a student of UNILAG Since at least 2017. Just a Heads up ;)');
                let firstName=prompt('Type in your First Name (It Has to be your first name, so it works)');
                let matNo=prompt('Type in your Matric Number');
                let uName= `${matNo}@students.unilag.edu.ng`;
                let password=`${matNo.toString().slice(0,5)}${firstName.slice(0,3).toLocaleUpperCase()}`;
                localStorage.setItem('userName',`${uName}`);
                localStorage.setItem('password',`${password}`);
                    document.getElementsByName('username')[1].value=uName;
                    document.getElementsByName('password')[1].value=password;
 }
 function autoSignIn(){
    document.getElementsByName('username')[1].value=localStorage.userName;
    document.getElementsByName('password')[1].value=localStorage.password;
 }
 if(window.location.href=='http://hsunilaggw.unilag.edu.ng/login'||
    window.location.href=='http://guapgw.unilag.edu.ng/login'){  
        if(localStorage.length==0){
                manualSignIn();
            }
        else{
                if(confirm('Do You Want To Login With New Details?')==true){
                    localStorage.clear();
                    manualSignIn();
                }else{
                    autoSignIn();
                }   
            }   
    }
document.querySelector('input[type=submit]').click();