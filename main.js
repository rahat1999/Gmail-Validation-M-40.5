const emails = document.getElementById('emails')
const span = document.getElementById('msg')
const errText = document.getElementById('error')
let mailFormat =/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
const verifyEmail= () =>{
    const values = emails.value;
    if(values===''){
        errText.innerHTML=`<p style="
        color:yellow;
        background:black;
        padding:2px;
        display:inline;
          "> ⚠️ Input Field can't be empty</p> `
        return;
    }
    displayEmail(values)
    emails.value=''
    
}
const displayEmail=value =>{
    if(value.match(mailFormat)){
        errText.innerHTML=`<p style="
        color:green; 
        display:inline;
        padding:2px;
        ">✓Valid email Address </p> `
    }
    else{
        errText.innerHTML=`<p style="
        color:red;
        display:inline;
        background:black;
        padding:2px;
         "> ❌You have Entred an invalid Email </p> `
    }
span.innerText=value
}