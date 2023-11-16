const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
const validate_3 = values => {
    const errors = {}
    if (!values.gfirstName) {
        errors.gfirstName = 'First name is required.\n'
      }
    if (!values.glastName) {
        errors.glastName = 'Last name is required.\n'
      }
    if(!values.gemail){
          errors.gemail = 'Email is Required.\n';
    }else if(!validateEmail(values.gemail)){
          errors.gemail = 'This is not a valid Email.\n';
    }
    return errors
  }
  export default validate_3