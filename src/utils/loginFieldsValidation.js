// regex.test() ---> will test a string against a regex and returns true if string matches

export const loginFieldsValidation = (email,password) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); // test() returns true if email is valid 
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isEmailValid) return " Email is not valid";
    if(!isPasswordValid) return "Password is not valid";


    return null;

}

export const signUpFieldsValidation = (name,email,password) => {

    const isNameValid = /^[A-Za-z ]{1,25}$/.test(name);
    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email); // test() returns true if email is valid 
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!isNameValid) return "Name is not valid";
    if(!isEmailValid) return " Email is not valid";
    if(!isPasswordValid) return "Password is not valid";


    return null;

}
