# [eFarmony Data Structures: Objects as Data Models](id:pt1)
[Back to Home](https://github.com/bgando/JS102)

In this section we will explore how to represent our eFarmony data as a JavaScript object.

**You will be placing all your code into the scripts.js file.** 

---

###[Animal User Model](id:model) 

This object will be the model of a single animal user. Extra points if you get the pun in the last sentence.

##### Object
An object to hold our data model...

- Create a variable, name it `animal`, and assign it an object literal.

With Dot Notation…

- Add a property called `username` and assign it a value.
- Ensure that your `username` property exists in animal by inspecting it in the console.

With Bracket Notation…

- Add a property called `tagline` and give it a value.
- Check that your property exists in the animal object by inspecting it in the console.
- Create a variable called `noises` and assign it an empty array `[]`
- Add the `noises` array to your object.
- Inspect your handiwork! Your object should look something like this:
``` 
  { username: 'DaffyDuck', tagline: 'Yippeee!', noises: [] }
  ```

##### Loops
- Loop through the properties of your animal object. 
- Count everytime it loops to keep track of the number of properties on your object.
- Write an if/else statement in your loop:
  -   If the key is `username`, console.log('Hi my name is ' + ___) //fill in with object's username value.
  -   If the key is `tagline`, console.log('I like to say ' + ___) //fill in with object's tagline value.
-   What happens if you return 'Hi my name is ' + ___ instead of using console.log() inside the loop?

##### Review
Let's go over some concepts:

- What are the different ways you can add properties and values to objects? 
- Which of these methods would you use if you wanted to add a property to an object that had a weird symbol (think '&')?
- What about if the property is a variable, how does that change the syntax?



//Functions exercises

# [Part 2: eFarmony Functions](id:pt2)
[Back to Home](https://github.com/bgando/JS102)

**You will be placing all your code into the scripts.js file** 

---

### [Animal User](id:profile)

1. Write a function, `AnimalTestUser`, that has one string parameter, `username`. It returns an object with a username property.

  ```javascript
  var testSheep = AnimalTestUser('CottonBall');
  console.log(testSheep); //{ username: 'CottonBall' }
  ```

1. In your `AnimalTestUser` function, create a check that sees how many arguments are passed. If there is more than one argument, create a property, `otherArgs` that is an array of the remaining arguments. Note: the `arguments` keyword is not a true array. Remember, it is an array-like object.

  ```javascript
  var testSheep = AnimalTestUser('CottonBall', {'loves dancing': true}, [1,2,3] );
  console.log(testSheep); //{ username: 'CottonBall', otherArgs: [ {'loves dancing': true}, [1,2,3] ] }
  ```


1. Write a constructor function, `AnimalCreator` that returns a single animal object. The constructor function has 4 parameters: `username`, `species`, `tagline,` and `noises`. The animal object should have at least 5 properties: `username`, `species`, `noises`, `tagline`, and `friends`. The values should all be strings except `noises` and `friends`, which are arrays. 
  
  ```javascript
  var sheep = AnimalCreator('Cloud', 'sheep', 'You can count on me!', ['baahhh', 'arrgg', 'chewchewchew']);
  console.log(sheep);
        // { username: 'Cloud', 
        //  species: 'sheep', 
        //  tagline: 'You can count on me!', 
        //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
        //  friends: []
        // }
  ```

1. Write a function, `addFriend` that takes an animal object (like the one returned from the `AnimalCreator` function) and adds another animal object as a friend. 

  ```javascript
    addFriend(sheep, cow);
    console.log(sheep);
          // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: [{username: 'Moo', species: 'cow'...}]
          // }
    addFriend(sheep, llama);
    console.log(sheep);
          // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: [{username: 'Moo', species: 'cow'...}, {username: 'Zeny', species: 'llama'...}]
          // }
  ```

1. Change your `addFriend` function to only add the username of the friend, not the whole object.

  ```javascript
    addFriend(sheep, cow);
    console.log(sheep);
          // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: ['Moo']
          // }
    addFriend(sheep, llama);
    console.log(sheep);
          // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: ['Moo', 'Zeny']
          // }
  ```
  
1. Create a `myFarm` collection of at least 3 animal objects. Give them some friends using `addFriend`, too!

  ```javascript 
  console.log(myFarm) //[{username: 'Cloud'...},{username: 'Zeny'...},{username: 'CottonBall'...}]
  ```
  
1. Create a function, `addMatchesArray`, that takes a farm (array of animal objects) and adds a new property to each animal object called `matches` that is an empty array. Hint: you will need a loop. 

  ```javascript 
  addMatchesArray(myFarm); 
  console.log(myFarm[0]); // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: ['Moo', 'Zeny'],
          //  matches: []
          // }
  ```
  
1. Create a function, `giveMatches`, that takes a farm collection (aka an array of animal objects) that already has a matches property. It selects a name from the `friends` array and adds it to the `matches` array. You can choose how the selection is made (random, the first element, etc). Make sure all your animal objects have friends.

  ```javascript 
  giveMatches(myFarm); 
  console.log(myFarm[0]); // { username: 'Cloud', 
          //  species: 'sheep', 
          //  tagline: 'You can count on me!', 
          //  noises: ['baahhh', 'arrgg', 'chewchewchew'], 
          //  friends: ['Moo', 'Zeny'],
          //  matches: ['Zeny']
          // }
  ```
