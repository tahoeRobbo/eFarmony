//write animal constructor and function that will loop through array and create 
//animal objects from array

var AnimalMaker = function(name) {
	return {
		speak : function() {
			console.log("my name is " + name);
		},
		name : name
	};
};

var animalNames = ['Sol', 'Jackson', 'Roh', 'Lah'];

var animalLooper = function(arr) {
	var animalObjArray = [];
	for(var i = 0; i < arr.length; i++) {
		animalObjArray.push(AnimalMaker(arr[i]));
	}
	return animalObjArray;
};


var animalObjArray = animalLooper(animalNames);
console.log(animalObjArray);

animalObjArray[0].speak();