let button = document.getElementById("home")[0];
setInterval(()=>{
    let b = new word();
    button.innertext = b.abutton();
},1000)