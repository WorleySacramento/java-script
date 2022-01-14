//var n1 = Number.parseInt (prompt('Digite um Número: '))  
//var n2 = Number.parseInt (prompt('Digite outro Número: ')) 


//var total = n1 + n2

//alert ('A Soma é!' +  total );
//alert (`A Soma entre ${n1} e ${n2} é igual a ${total} `);//template strings 


//Number ambos tanto inteiro quanto decimal
//Number.parseInt numero inteiro
//Number.parseFloat numero decimal

//String(n) ou  n.toString() transforma valor em string

//template strings  
//var s = 'JavaScript'
//alert (`Eu estou aprendendo ${s}`) //uso da template string nescessario crase `
//alert ('Eu estou aprendendo' + ' ' + s)  //usa concatenação


//var s = 'JavaScript'



//s.length //quantos caracteres tem em uma string
//s.toUpperCase //transforma em letras maiusculas
//s.toLowerCase // transforma em letras minusculas


var n1 = 2276.90

n1.toLocale.String('pt-BR', {style: 'currency', currency: 'BRL'})