function fib(n){
  let num1 =0 , num2=1, result
    console.log("fibonacci")

    for(let i=2;i<=n;i++ ){

   
   let  result = num1 + num2;
     num1 = num2;
     num2 = result;
     

}


}

let ws = fib(10)
console.log(ws)