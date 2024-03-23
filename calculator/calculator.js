var calc = document.getElementById('container')
var seel = document.getElementById('display')


// solve.addEventListener('input', input +)

// function input(val){
//     document.getElementById('display').value += val
// }

// function solve(){
//     var solve = solve.value
//     document.getElementById('display').value = eval(solve)
// }

function input(val){
    document.getElementById('display').value += val
    return val
    console.log(value)
}

// calc.addEventListener('keyup', function(e){
//     if(e.keyCode===13){
//        solve()
//     } 
      
// }
// )


function solve(){
    var sol = document.getElementById('display').value
    document.getElementById('display').value = eval(sol)
}

// calc.addEventListener('keyup', function(e){
//     if(e.keyCode===13){
//        console.log('Enter')
//         var varr =  document.getElementById('display').value
//       console.log(varr)
//       solve
//  } 
// }
// )

function clr()
{
    document.getElementById('display').value = ''
}


