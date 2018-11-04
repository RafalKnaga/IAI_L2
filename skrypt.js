 //Zadanie 1
//console.log("Hello World!");

//Zadanie 2
//let array=[1,2,3,4,5,6,7,8,9,10];
//for(let i=1; i<=10; i++){   
//    for(let j=1; j<=10; j++){
//        array.push(i*j);
//   }
//    console.log(array);
//  }

 // Zadanie 3 
 
 let send = document.querySelector(".send");

    send.addEventListener("click", checkForm);


    function addClass(element, className) {
        element.classList.add(className);
    }

    function removeClass(element, className) {
        element.classList.remove(className);
    }


    function checkForm() {
		
		let iname    = document.querySelector("#name");
		let isurname = document.querySelector("#surname");
		let iage     = document.querySelector("#age");
		let iemail   = document.querySelector("#email");

        let inameV     = iname.value;
		let isurnameV  = isurname.value;
		let iageV      = iage.value;
		let iemailV    = iemail.value;

    

		
        

    if(inameV === '')  {
            addClass(iname, 'is-invalid');
			 removeClass(iname, 'is-valid');
			document.getElementById('aname').innerHTML= "To pole musi być wypełnione";
			document.getElementById('bname').innerHTML= "";
        }
		
	else if(parseInt(inameV)){
            addClass(iname, 'is-invalid');
			 removeClass(iname, 'is-valid');
			document.getElementById('aname').innerHTML= "Wypełnij pole tylko literami";
			document.getElementById('bname').innerHTML= "";
        }
	else{
			 removeClass(iname, 'is-invalid');
			  addClass(iname, 'is-valid');
			document.getElementById('bname').innerHTML= "OK";
			document.getElementById('aname').innerHTML= "";
			
        }
		
		
    if(isurnameV === '')  {
            addClass(isurname, 'is-invalid');
			 removeClass(isurname, 'is-valid');
			document.getElementById('asurname').innerHTML= "To pole musi być wypełnione";
			document.getElementById('bsurname').innerHTML= "";
        }
		
	else if(parseInt(isurnameV)){
            addClass(isurname, 'is-invalid');
			 removeClass(isurname, 'is-valid');
			document.getElementById('asurname').innerHTML= "Wypełnij pole tylko literami";
			document.getElementById('bsurname').innerHTML= "";
        }
	else{
			 removeClass(isurname, 'is-invalid');
			  addClass(isurname, 'is-valid');
			document.getElementById('bsurname').innerHTML= "OK";
			document.getElementById('asurname').innerHTML= "";
			
        }
		
		
		
	if(iageV === '')  {
            addClass(iage, 'is-invalid');
			 removeClass(iage, 'is-valid');
			document.getElementById('aage').innerHTML= "To pole musi być wypełnione";
			document.getElementById('bage').innerHTML= "";
        }
		
		
	else if (!parseInt(iageV) || isNaN(iageV) || iageV < 1 || iageV > 100) {
            addClass(iage, 'is-invalid');
			document.getElementById('aage').innerHTML= "ZLE";
			 addClass(iage, 'is-invalid');
			 removeClass(iage, 'is-valid');
			document.getElementById('aage').innerHTML= "Podaj tylko liczby, zakres 1-100";
			document.getElementById('bage').innerHTML= "";	
        } 
	else {
            removeClass(iage, 'is-invalid');
			addClass(iage, 'is-valid');
			document.getElementById('bage').innerHTML= "OK";
			document.getElementById('aage').innerHTML= "";	
        }
		
    
	
	  
	}
			
			
			
			
			