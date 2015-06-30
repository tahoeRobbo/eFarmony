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


