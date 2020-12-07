function Update (){
    var men = document.getElementsByTagName('input');
    for (var i = 0; i < men.length; i++) {
        man = men[i];
        if ((man.type == 'radio' || man.type == 'checkbox')&& man.parentNode.nodeName != 'LABEL'){
            var baby = man.nextElementSibling;
            if(!baby || !baby.textContent)
                baby = man.nextSibling;
            if(baby){
                if((baby.nodeName == '#text' || ((baby.nodeName == 'DIV' || baby.nodeName == 'SPAN') && baby.textContent))){
                    var wrapper = document.createElement("LABEL");
                    man.parentNode.insertBefore(wrapper, man);
                    wrapper.appendChild(man);
                    wrapper.appendChild(baby);
                }
            }
        }
    }
}
Update();
var selfImposed = true;
function nodeInsertedCallback(event) {
    if(!selfImposed){
        selfImposed = true;
        Update();
        selfImposed = false;
    }
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);