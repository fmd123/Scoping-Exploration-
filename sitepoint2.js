var test = "I'm global";

function testScope () {
  var test = "I'm local";

  console.log (test);     
}

testScope();           // output: I'm local

console.log (test);    // output: I'm global