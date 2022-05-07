var til = prompt('tilni tanlang uz yoki rus')


if(til === 'uz') {
    var uzinfo = prompt ('opratsiya tanlang : balans , naqd , check' )
    if(uzinfo === 'balans'){
     console.log('sizning balansizgiz 20.000 som')
    }else if(uzinfo === 'check'){
     console.log('checkni oling')
    }else if(uzinfo === 'naqd'){
        console.log('kuting...')
    }else {
        console.error ('notogri')
    }
}




else if(til === 'rus') {
    var ruinfo = prompt('vibirete opiratsiya : balans , nalichka , check')
    if(ruinfo === 'balans'){
        console.log('vash schot 20.000 som')
       }else if(uzinfo === 'check'){
        console.log('vozmite check')
       }else if(uzinfo === 'naqd'){
           console.log('jdi...')
       }else {
           console.error ('owibka')
       }
}


else{
    console.error('siz notogri til tanladingiz ')
}