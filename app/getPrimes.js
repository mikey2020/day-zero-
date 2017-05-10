module.exports = {
	

	getPrimes: (value) => {
		if(typeof value != 'number'){
			return "invalid input";
		}
		else if(value < 0){
			return 'only positive values allowed';
		}
		else if(value === 0){
			return 'input cannot be zero';
		}
		else if(value == 1){
			return [value];
		}
		let primesList = [];
		for(let count = 1; count <= value; count++){
			if(checkPrimes(count) == true){
				primesList.push(count);
			}
			
		}

		return primesList;
	}


	
}

const checkPrimes = (value) => {
		let factors = 0;
		for(let count = 1; count <= value; count++){
			if(value % count == 0){
				factors++;
			}
		}
		if(factors > 2){
			return false;
		}

		else if(factors === 2){
			return true;
		}
}