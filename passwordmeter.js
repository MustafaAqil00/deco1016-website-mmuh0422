
// Password strength meter code was sourced from this video tutorial https://www.youtube.com/watch?v=_3aw4N-JNic

password.addEventListener("keyup", function() {
    strength();
})

function strength(){
    var val = document.getElementById("password").value;
    var status = document.getElementById("length");
    var counter = 1;

    if(val!="")
    {
        // These If statements check the character length of when the user types in his password.

        if(val.length<= 5)
            counter=1;
        if(val.length > 5 && val.length <=10)
            counter=2;
        if(val.length > 10 && val.length <=20)
            counter=3;


        // utilising these IF statements to change the styling of the div in order to provide the user with feeback
            if(counter == 1) {
                status.innerHTML="< ";
                status.style.background="rgba(255,0,0,.3)";
                status.style.color="transparent";
            }

            if(counter == 2) {
                status.innerHTML="< ";
                status.style.background="rgba(255,255,0,.3)";
                status.style.color="transparent";
            }

            if(counter == 3) {
                status.innerHTML="<";
                status.style.background="rgba(0,255,0,.3)";
                status.style.color="transparent";
            }
    }
}