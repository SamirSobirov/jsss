let list = "putin zelenskiy biden trump "

let name = prompt('Как вас зовут?').toLowerCase().trim()

if( list.includes(name) ){
    console.log('Welcome!');
}
else {
    console.log('Get out, please go home!!! ');
}

let num = prompt ('Any number')

if (num % 2 === 0) {
    console.log('even') 
} else {
    console.log('odd');
}