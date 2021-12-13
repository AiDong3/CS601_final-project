/*banner */
const background = document.querySelector(".background")

        document.addEventListener('scroll', () => {
            const scrollY = window.scrollY

            if (scrollY !== 0) {
                background.style.backgroundPosition = `calc(50% + ${scrollY}px) calc(50% + ${scrollY}px)`
            }else{
                background.style.backgroundPosition = ''
            }
        })

/* check message */
const form = document.querySelector('#signup');

const messageEl = document.querySelector('#message');

const checkMessage =() =>{
    let valid = false;

    const message = messageEl.value.trim();

    if(!isRequired(message)){
        showError('Message cannot be blank.')
    }else{
        valid = true;
    }
    return valid;
};

/* check name */
const nameEl = document.querySelector('#name');
const checkName = () => {

    let valid = false;

    const name = nameEl.value.trim();

    if (!isRequired(name)) {
        showError( 'Name cannot be blank.');
    }
    else {
        valid = true;
    }
    return valid;
};

/*check email */
const emailEl = document.querySelector('#email');
const checkEmail = () => {
    let valid = false;
    const email = emailEl.value.trim();
    if (!isRequired(email)) {
        showError('Email cannot be blank.');
    } else {
        valid = true;
    }
    return valid;
}

const isRequired = value => value === '' ? false : true;

const showError = (message) => {
    alert(message);
};


/* comprehensive validation */
form.addEventListener('submit', function (e) {
    // prevent the form from submitting
    e.preventDefault();

    // validate fields
    let isNameValid = checkName(),
        isMessageValid = checkMessage(),
        isEmailValid = checkEmail();

    let isFormValid = isNameValid &&
        isMessageValid &&
        isEmailValid;

    // submit to the server if the form is valid
    if (isFormValid) {
        this.submit();
    }
});


const debounce = (fn, delay = 500) => {
    let timeoutId;
    return (...args) => {
        // cancel the previous timer
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        // setup a new timer
        timeoutId = setTimeout(() => {
            fn.apply(null, args)
        }, delay);
    };
};

form.addEventListener('input', debounce(function (e) {
    switch (e.target.id) {
        case 'name':
            checkName();
            break;
        case 'message':
            checkMessage();
            break;
        case 'email':
            checkEmail();
            break;
    }
}));


   // fetch data from server
   document.getElementById("fetch").onclick = function (){
    async function getData(url) {
      // fetch the url
      await fetch(url)
        //get your data here, and check for the response status. If it's not 200, throw an error
        .then( checkStatus)
        .then((data) => showinfo(data))
        .catch(err => console.log(err));
    }
    /*--- get info from json file---*/
    getData ("https://hur-form-api.herokuapp.com/api/");
}

/*---- check response statue---*/
function checkStatus(response){
    console.log(response);
    
    alert("your response status is : " + response.status);
  
    if(response.status !== 200){
      throw "Status Error!"
    }
    return response.json();
  }

  /*--- show json file info---*/
function showinfo(data){
    var containder = document.getElementById("data");
    var span1 = document.getElementById("fetch");
    var button = document.getElementById("fetch");
  
    span1.innerText = `The first data id is:  ${data.users[0].id} first name is: ${data.users[0].first_name}, last name is : ${data.users[0].last_name}
    , email is : ${data.users[0].email}, gender is ${data.users[0].gender}`;
    
  
    containder.removeChild(button);
    containder.appendChild(span1);
  }