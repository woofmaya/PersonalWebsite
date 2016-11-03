function helloWorld(x,y,z) {
  var x = 5
  var y = "rohan"
  y = 10
  console.log("obama")
}

helloWorld()

alert("ahhh")

function handleClick(){
  var text = $(this).text() //specific one handler is on/clicked
  alert(text)
}

//anon function that gets passed into doc.ready
//will execute when page is ready
//ensures code runs after everything is on page
$(document).ready(function(){
  console.log("woooooo")
  $(".panel").click(handleClick)//selecting panel elements
})
