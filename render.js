var zooName = prompt("What is your name?")

function sayHello(name){
  $("h1").prepend("<h2>Welcome, " + name + "</h2>")
}

sayHello(zooName)
