/**
 * Check if password is small than 8 charecters
 * @param {*} input
 * @returns true if is not empty
 */
 function small(input) {
    return (input.length < MINCHARACTERS) ? true : false;
}

//----------------------- GLOBAL VARIABLES ----------------------- //
const MINCHARACTERS = 10;

// ---------------------- EVENTS HANDLING ------------------------ //
password = document.getElementById("pswd");
let pswd = password.value;

password.addEventListener("focusout", ()=>{
    if(small(pswd)){
        alert('Wrong password! Too small ');
    }
})