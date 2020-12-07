function Update (){
    var inputs = document.getElementsByTagName('input');
    for (var i = 0; i < inputs.length; i++) {
        input = inputs[i];
        if ((input.type == 'radio' || input.type == 'checkbox')&& input.parentNode.nodeName != 'LABEL'){
            var baby = input.nextElementSibling;
            if(!baby || !baby.textContent)
                baby = input.nextSibling
            if(baby){
                if(baby &&(baby.nodeName == '#text' || ((baby.nodeName == 'DIV' || baby.nodeName == 'SPAN') && baby.textContent))){
                    var wrapper = document.createElement("LABEL");
                    input.parentNode.insertBefore(wrapper, input);
                    wrapper.appendChild(input);
                    wrapper.appendChild(baby);
                }
            }
        }
    }
}
Update();
var selfImposed = false
function nodeInsertedCallback(event) {
    if(!selfImposed){
        selfImposed = true;
        Update();
        selfImposed = false;
    }
};
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);