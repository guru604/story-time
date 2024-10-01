showbox=document.getElementById('showbox')
full=document.querySelector('section')
function abc()
{

    showbox.style.display='block'
    showbox.style.zIndex='2'
    full.style.display='none'
}

function guru()
{
  event.preventDefault()
  showbox.style.display='none'
   full.style.display='block'
}

// cancel function end
one=document.getElementById('one')
two=document.getElementById('two')
three=document.getElementById('three')
ball=document.getElementById('ball')
function add(event)
{
  event.preventDefault()
 var div=document.createElement("div")
 div.setAttribute("class","con")
 div.innerHTML=` <h2>${one.value}</h2>
    <br>
    <p>${three.value}</p>
    <h3>${two.value}</h3>
    <button class="rebtn" onclick="rebtn(event)" >remove</button>`
 ball.append(div)


}
function rebtn()
{
event.target.parentElement.remove()
}