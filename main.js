var passbox = document.querySelector('#Password');
var lenght = 12;
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var number = "0123456789";
var symbol = "~!@#$%^&*()_+|}{[]></-=";
var allchar = upper + lower + number + symbol;
var fun = () => {
    let pass = "";
    pass += upper[Math.floor(Math.random()*upper.length)];
    pass += lower[Math.floor(Math.random()*lower.length)];
    pass += number[Math.floor(Math.random()*number.length)];
    pass += symbol[Math.floor(Math.random()*symbol.length)];

    while(pass.length < lenght){
        pass += allchar[Math.floor(Math.random()*allchar.length)];
    }
    passbox.value = pass;
}
var copyo = () =>{
    passbox.select();
    document.execCommand("copy");
}