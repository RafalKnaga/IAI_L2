 let send = document.querySelector(".send");

    send.addEventListener("click", checkForm);


    function addClass(element, className) {
        element.classList.add(className);
    }

    function removeClass(element, className) {
        element.classList.remove(className);
    }


    function checkForm() {
		
		let iname = document.querySelector("#name");
		let isurname = document.querySelector("#surname");
		let iemail = document.querySelector("#email");
		let iage = document.querySelector("#age");
		


        let inameV     = iname.value;
		let isurnameV = isurname.value;
		let iemailV    = iemail.value;
		let iageV     = iage.value;
		

    

		
        if (iageV === '' || !parseInt(iageV) || isNaN(iageV) || iageV < 1 || iageV > 100) {
            addClass(iage, 'is-invalid');
        } else {
            removeClass(iage, 'is-invalid');
        }

        if(inameV === '' || parseInt(inameV)) {
            addClass(iname, 'is-invalid');
        } else {
            removeClass(iname, 'is-invalid');
        }
		

		if (isurnameV === '' || parseInt(isurnameV)){
			addClass(isurname, 'is-invalid');
		}else {
			removeClass(isurname, 'is-invalid');
		}
			
			
		if (iemailV === '' || parseInt(iemailV)){
			addClass(iemail, 'is-invalid');
		}else {
			removeClass(iemail, 'is-invalid');
		}
			
	
		
    }