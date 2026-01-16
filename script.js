const radiusInput = document.getElementById("radius")
const volume = document.getElementById("volume")
// const submit = document.getElementById("submit")
const form = document.getElementById("form")


function volume_sphere(radius) {
    //Write your code here
	return (4/3) * Math.PI * radius ** 3
} 
form.addEventListener("submit",(e)=>{
	e.preventDefault();
	
	const radius = Number(radiusInput.value)
	volume.value = volume_sphere(radius).toFixed(2);
})


// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
