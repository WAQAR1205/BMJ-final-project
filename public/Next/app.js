// var teach = document.getElementsByClassName('teacher')
// var student = document.getElementsByClassName('student')
// console.log(teach , student)
var inp = document.createElement("input")
var inp_1 = document.createElement("input")
var inp_2 = document.createElement("input")
function teacher(){
    var res = document.getElementById("res");
    res.innerHTML = ""
    document.createElement("form")
    var line = document.createElement('br')
    inp.setAttribute("id","inp")
    inp.setAttribute("placeholder" , "ENTER YOUR NAME")

    res.appendChild(inp) 
    res.appendChild(line)
    
    inp.setAttribute("id","inp_1")
    inp_1.setAttribute("placeholder" , "WHICH CLASS")
    res.appendChild(inp_1)

    inp.setAttribute("id","inp_2")
    inp_2.setAttribute("placeholder" , "CONTACT NUMBER")
    res.appendChild(inp_2)

    var btn = document.createElement("button")
    btn.setAttribute("onclick" , "submit(this)")
    var text = document.createTextNode("SUBMIT")
    btn.append(text)
    res.appendChild(btn)
}

function student(){
    teacher()
}

function submit(e){
    if(inp.value == "" || inp_1.value == "" || inp.value ==""){
        alert("PLEASE FILL THE EMPTY BLOCK")
    }
    else{
        alert("CONGRATS! WE WILL CONTACT YOU")
    }
    // alert("CONGRATS! WE WILL CONTACT YOU")
}

