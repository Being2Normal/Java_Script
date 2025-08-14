function add(){
    let n1 = parseInt(document.getElementById("1name").value)
    let n2 = parseInt(document.getElementById("2name").value)
    var sum = n1 + n2
    document.getElementById("ans").innerText=sum
}

function sub(){
    let n1 = parseInt(document.getElementById("1name").value)
    let n2 = parseInt(document.getElementById("2name").value)
    let min = n1 - n2
    document.getElementById("ans").innerText = min
}
function div(){
    let n1 = parseInt(document.getElementById("1name").value)
    let n2 = parseInt(document.getElementById("2name").value)
    let di = n1 / n2
    document.getElementById("ans").innerText = di
}
function sub(){
    let n1 = parseInt(document.getElementById("1name").value)
    let n2 = parseInt(document.getElementById("2name").value)
    let mlt = n1 * n2
    document.getElementById("ans").innerText = mlt
}