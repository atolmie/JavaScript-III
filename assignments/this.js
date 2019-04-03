/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Inside the global scope, "this" will be the window/console object.
* 2. Whenever a function is called by a dot that comes before it, the object before the dot is this.
* 3. When using a constructer function, this refers to the object that is created and returned by the constructer function. 
* 4. When using methods call or apply, this is explicitly defined.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function stateLocation(location) {
    console.log(this);
    return location ;
  }
  stateLocation("MN");

// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  myObj.sayHello('Anne');



// Principle 3

// code example for New Binding
function PuppyLover(lover) {
    this.loving = 'I love puppies';
    this.lover = lover;
    this.speak = function() {
      console.log(this.loving + this.lover);
      console.log(this);
    };
  }
  
  const jerry = new PuppyLover('Anne');
  const anne = new PuppyLover('Jerry');
  
  jerry.speak();
  anne.speak();
  

// Principle 4

// code example for Explicit Binding

function PuppyLover(lover) {
    this.loving = 'I love puppies';
    this.lover = lover;
    this.speak = function() {
      console.log(this.loving + this.lover);
      console.log(this);
    };
  }
  
  const a = new PuppyLover('A');
  const b = new PuppyLover('B');
  
a.speak.call(b); b.speak.apply(a);
