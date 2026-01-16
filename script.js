const radius = document.getElementById("radius").value
const volume = document.getElementById("volume")
const submit = document.getElementById("submit")

function volume_sphere() {
    //Write your code here
	return (4/3) * Math.PI * Math.pow(radius,3)
} 
submit.addEventListener("click",()=>{
	volume.value = volume_sphere()
})

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
