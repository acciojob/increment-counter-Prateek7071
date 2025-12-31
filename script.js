//your JS code here. If required.
let count  = 0;
const button  = document.querySelector("#incrementBtn")
const counter = document.querySelector("#counter")

button.addEventListener('click',()=>{
	alert(count)
	count ++;
	counter.textContent = count
})