let registrationForm = document.getElementById('registration')
registrationForm.addEventListener('submit',function(e){
    e.preventDefault();
    let form = e.target;
    let errors = {};


        let firstname = document.querySelector('[name = "firstname"]').value;
            if(firstname == ''){
                errors.firstname = 'Enter First Name';
            }else if (!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(firstname)){
                errors.firstname = 'Invalid First Name';
            }

        let lastname = document.querySelector('[name = "lastname"]').value;
            if(lastname == ''){
                errors.lastname = 'Enter Last Name';
            }else if(!/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(lastname)){
                errors.lastname = 'Invalid Last Name';
            }

        let username = document.querySelector('[name = "username"]').value;
            if(username.length < 8){
                errors.username = 'Min 8 Letters';
            }else if(!/^[A-Za-z ][A-Za-z0-9!@#$%^&* ]*$/.test(username)){
                errors.username = 'Invalid Username';
            }

        let email = document.querySelector('[name = "email"]').value;
            if(email == '') {
                errors.email = "Enter Email"
            }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
                errors.email = "Invalid Email"
            }

        let textarea = document.querySelector('[name = "textarea"]').value;
            if(textarea == ''){
                errors.textarea = 'Enter message';
            }

        let agree = document.querySelector('[name = "agree"]').checked;
            if(!agree){
                errors.agree = "You must agree terms and conditions";
            }

            form.querySelectorAll('.error').forEach(item => {
                item.textContent = '';
            });

            for (let name in errors){
                let namePlacedolder = document.getElementById('error_' + name);
                if(namePlacedolder){
                    namePlacedolder.textContent = errors[name];
                }
                form.querySelector('[name = "'+ name +'"]').classList.add('error');
            }
            // form.submit();
            // console.log(errors)

})