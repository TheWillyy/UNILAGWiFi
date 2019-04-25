if(window.location.href=='http://hsunilaggw.unilag.edu.ng/login?dst=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirect' ||
    window.location.href=='http://guapgw.unilag.edu.ng/login' ||
    window.location.href== 'http://guapgw.unilag.edu.ng/login?dst=http%3A%2F%2Fwww.msftconnecttest.com%2Fredirect'){
        if(localStorage.length==0){
            alert('You Have to be a student of UNILAG Since at least 2017. Just a Heads up ;)');
            let firstName=prompt('Type in your First Name (It Has to be your first name, so it works)');
            let matNo=prompt('Type in your Matric Number');
            let uName= `${matNo}@students.unilag.edu.ng`;
            let password=`${matNo.toString().slice(0,5)}${firstName.slice(0,3).toLocaleUpperCase()}`;
            localStorage.setItem('userName',`${uName}`);
            localStorage.setItem('password',`${password}`);
                document.getElementsByName('username')[1].value=uName;
                document.getElementsByName('password')[1].value=password;
                doLogin();
        }
        else{
            document.getElementsByName('username')[1].value=localStorage.userName;
            document.getElementsByName('password')[1].value=localStorage.password;
                doLogin();
        }
    
}else{
    alert('This Is Not The UNILAG WiFi Login Page')
}