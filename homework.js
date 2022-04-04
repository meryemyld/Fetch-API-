document.querySelector("#button1").addEventListener("click", getData);

function getData(){
	fetch("https://randomuser.me/api/?results=100").then(function(response){

	return response.json();
	}).then(function(data){

		let result= data.results;
	
		let output= "<ul>";

		result.forEach(function(user) {

			if (document.querySelector("#options").value==1 && user.dob.age>=20 && user.dob.age<=40 ){
				output += `<li> ${user.name.first} : ${user.dob.age} </li>`
			}
			
			if (document.querySelector("#options").value==2 && user.dob.age>40 && user.dob.age<=60 ){
				output += `<li> ${user.name.first} : ${user.dob.age} </li>`
			}

			if (document.querySelector("#options").value==3 && user.dob.age>60 && user.dob.age<=80 ){
				output += `<li> ${user.name.first} : ${user.dob.age} </li>`
			}

			if (document.querySelector("#options").value==4 ){
				output += `<li> ${user.name.first} : ${user.dob.age} </li>`
			}

		})

		output += "</ul>";

		document.querySelector("#output_div").innerHTML = output;
	});
}