
var txtName = "";
var name2 = "";
function button(){
    txtName = document.getElementById("text");
    // name2 = txtName.value;
    // txtOutput.value = "Hi there, " + name2 + "!"
    var txtOutput = document.getElementById("textout");
    txtOutput.value = "Hi there, " + txtName.value + "!"
}

