// document.querySelector("#reset").style.display="none"

// document.querySelector("#btn" ).addEventListener("click", event=>
// {event.preventDefault();
// document.querySelector(".submitform").style.display="none";
// });

const fname= document.getElementById('fname')
const lname= document.getElementById('lname')
const mnumber= document.getElementById('mnumber')
const emaddress= document.getElementById('emaddress')
const dob= document.getElementById('dob')
const mymessage= document.getElementById('mymessage')
const form= document.getElementById('submitform')
const errorelement=document.getElementById("errormessage")
const pword=document.getElementById('pword')
const pwordconfirm=document.getElementById('pwordconfirm')


form.addEventListener('submit',(e)=>
{
    // add form validation for the input field and display an error message
    let messages=[]
    if(
        fname.value===''|| fname.value == null)
         {
            messages.push('First name is required!')
        }

    if(
            lname.value===''|| lname.value == null)
             {
                messages.push('Last name is required!')
            }

     if (
        pword.value===''|| pword.value == null
     )   {
        messages.push('Password is required!')
     }

     if (
        pword.value.length<= 6
     )   {
        messages.push('Password must be longer than 6 characters!')
     }
    
     if (
        pwordconfirm.value !== pword.value || pwordconfirm == null
     ){
       messages.push ("Please confirm password!")
     }

    if (messages.length>0){
        e.preventDefault()
        errorelement.innerText=messages.join(', ')
    }
    
})