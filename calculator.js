var calc = document.getElementById('container')
var seel = document.getElementById('display')




function input(val){
    document.getElementById('display').value += val
    return val
    console.log(value)
}




function solve(){
    var sol = document.getElementById('display').value
    document.getElementById('display').value = eval(sol)
}



function clr()
{
    document.getElementById('display').value = ''
}




