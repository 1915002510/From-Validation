function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}


function validateForm() {
    var name = document.contactForm.name.value;
    var email = document.contactForm.email.value;
    var mobile = document.contactForm.mobile.value;
    var dob = document.contactForm.dob.value;
    var country = document.contactForm.country.value;
    var address = document.contactForm.address.value;
    var zip = document.contactForm.zip.value;
    var gender = document.contactForm.gender.value;
    var contact = document.contactForm.contact.value;
    var relation = document.contactForm.relation.value;
    var hobbies = [];
    var checkboxes = document.getElementsByName("hobbies[]");
    for(var i=0; i < checkboxes.length; i++) {
        if(checkboxes[i].checked) {
            hobbies.push(checkboxes[i].value);
        }
    }
    
    var nameErr = emailErr = mobileErr = dobErr = countryErr = addressErr = zipErr = genderErr = contactErr = relationErr = true;
    
   
    if(name == "") {
        printError("nameErr", "Please enter your name");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            printError("nameErr", "Please enter a valid name");
        } else {
            printError("nameErr", "");
            nameErr = false;
        }
    }
    
    
    if(email == "") {
        printError("emailErr", "Enter  Email Address");
    } else {
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr", "Enter a valid email address");
        } else{
            printError("EmailErr", "");
            emailErr = false;
        }
    }
    
   
    if(mobile == "") {
        printError("mobileErr", "Enter Your Mobile Number");
    } else {
        var regex = /^[1-9]\d{10}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr", " Enter a valid 11 digit Mobile Number");
        } else{
            printError("mobileErr", "");
            mobileErr = false;
        }
    }
    
 
    if(dob == "") {
        printError("dobErr", " Select your Date of Birth");
    } else {
        printError("dobErr", "");
        dobErr = false;
    }
    

    if(country == "Select") {
        printError("countryErr", "Please select your country");
    } else {
        printError("countryErr", "");
        countryErr = false;
    }

   
    if(address == "") {
        printError("addressErr", "Please select your address");
    } else {
        printError("addressErr", "");
        addressErr = false;
    }

  
    if(zip == "") {
        printError("zipErr", "Please enter your zip code");
    } else {
        var regex = /^[1-9]\d{3}$/;
        if(regex.test(zip) === false) {
            printError("zipErr", " enter a valid 4 digit zip code");
        } else{
            printError("zipErr", "");
            zipErr = false;
        }
    }
    
    
    if(gender == "") {
        printError("genderErr", " select your gender");
    } else {
        printError("genderErr", "");
        genderErr = false;
    }
    
    
    if(contact == "") {
        printError("contactErr", " enter your emergency contact number");
    } else {
        var regex = /^[1-9]\d{9}$/;
        if(regex.test(contact) === false) {
            printError("contactErr", " enter a valid 11 digit mobile emergenct contact number");
        } else{
            printError("contactErr", "");
            contactErr = false;
        }
    }
    
   
    if(relation == "") {
        printError("relationErr", "enter your realation with the emergency contact");
    } else {
        printError("relationErr", "");
        relationErr = false;
    }
    

    if((nameErr || emailErr || mobileErr || dobErr || countryErr || addressErr || zipErr || genderErr || contactErr || relationErr) == true) {
       return false;
    } else {
        var dataPreview = "You've entered the following details: \n" +
                          "Full Name: " + name + "\n" +
                          "Email Address: " + email + "\n" +
                          "Mobile Number: " + mobile + "\n" +
                          "Date of Birth: " + dob + "\n" +
                          "Country: " + country + "\n" +
                          "Address: " + address + "\n";
                          "ZIP: " + zip + "\n";
                          "Gender: " + gender + "\n";
                          "Emergency Contact: " + contact + "\n";
                          "Relation with the Contact: " + relation + "\n";
        if(hobbies.length) {
            dataPreview += "Hobbies: " + hobbies.join(", ");
        }
        alert(dataPreview);
    }
};