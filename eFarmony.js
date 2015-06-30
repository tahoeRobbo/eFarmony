var sol ={
	color : "orange"
};
var prop;
var count = 0;
var noiseArray = ['brrOw!', 'brrr', 'sgkity!'];
noiseArray.unshift('I love you Rob');
noiseArray.push('I miss you Rob');
noiseArray[noiseArray.length] = 'purrrr';

console.log(noiseArray.length);
	sol.username = 'Lil Kitty';
	sol.tagline = "I'm a Kitty!!";
	sol.noises = noiseArray;

for(prop in sol) {
	if(prop === 'username') {
		console.log("Hi, my name is " + sol.username);
		count +=1;
	}
	if(prop === 'tagline') {
		console.log("and I like to say... " + sol.tagline);
		count +=1;
		console.log(count);
	}if(prop === 'noises') {
		var randomNoise = sol.noises[Math.floor(Math.random() * sol.noises.length)];
		console.log(randomNoise);
		}
	}

console.log(noiseArray.length);


var animals = [];
animals.push(sol);

var quackers = {
	username : 'dirtyDuck',
	tagline : 'Im just a dirty ole duck',
	noises : ['wakka flakka', 'quack', 'bliggidy bloggidy bloo']
};
animals[animals.length] = quackers;
console.log(animals);

var suze = {
	username : 'Suzy Q',
	tagline : 'I do what I do, Cuz I\'m Suzy Q!',
	noises : ['chicka chicka', 'boopy doopy', 'ooooooh hehehe']
};

var sallySalmon = {
	username : 'sallySalmon',
	tagline : 'I\'m just a cold wet fish',
	noises : ['I dunno..', 'This doesn\'nt seem smart']
};

animals.push(suze, sallySalmon);
console.log(animals);

//FUNCTIONS

var AnimalTestUser = function(username) {
	var otherArgs = [];
	if(arguments.length > 1) {
		for(var i = 1; i < arguments.length; i++) {
			otherArgs.push(arguments[i]);
		}
	}
	return {
		username : username,
		otherArgs : otherArgs
	};
};

var testSheep = AnimalTestUser('Baaahsack', {'loves dancing' : true}, [1,2,3] );
console.log(testSheep);

var AnimalCreator = function(username, species, tagline, noises) {
	return {
		username : username,
		species : species,
		tagline : tagline, 
		noises : noises,
		friends :[]
	};
};

var sheep = AnimalCreator('Cloud', 'sheep', 'count on me to fall asleep!', ['mmmm', 'baaaaaaah', 'bawww-yeaah!!']);
var dog = AnimalCreator('Woofer', 'dog', 'Ay im a dog!', ['rrrrrrRuf!', 'Barowrorw', 'grape']);
var kitty = AnimalCreator('MisterWhiskers', 'kitty', ['mrow', 'prrr']);

console.log(sheep);

var addFriend = function(user, friend) {
	user.friends.push(friend.username);
};

var myFarm = [sheep, dog, kitty];
addFriend(dog, kitty);
addFriend(kitty, sheep);
addFriend(kitty, dog);
addFriend(sheep, dog);

console.log(myFarm);

var addMatchesArray = function(arr) {
	for(var i = 0; i < arr.length; i++) {
		arr[i].matches = [];
	}
};

addMatchesArray(myFarm);

console.log(myFarm);

var giveMatches = function(farm) {
	for(var i = 0; i < farm.length; i++) {
		farm[i].matches = farm[i].friends[Math.floor(Math.random() * farm[i].friends.length)];
	}
};

giveMatches(myFarm);
console.log(myFarm);



























