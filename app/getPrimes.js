  module.exports = {

	getPrimes: (integer) => {
		list = [];

    if(integer < 0 ){
      return "only positive values allowed";
    }
    
    else if(integer == 0){
      return "input cannot be zero";
    }
    
    else if(typeof(integer) != "number"){
      return "invalid input";
    }
  
    for(let i = 0; i <= integer; i++){
      
      let count = 0 ;//to determine number of divisors a value has 
      
      let j = 0 ;
      
      while(j <= i) {//to check number of times a number is divisible 
        
        if(i % j === 0  ){
          ++count;
          }
          j++;
        }
      
      if(count === 2){
        list.push(i);
      }  
    }

    return list;
  }	
}