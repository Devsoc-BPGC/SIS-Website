const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validateName = (name) => {
    return String(name)
    .toLowerCase()
    .match(
      /^[A-Za-z]+$/
    )
  };
  const validate_1 = values => {
    const errors = {}
    if(!values.prefix){
        errors.prefix = 'Prefix is required.\n';
    }
    if (!values.firstName) {
      errors.firstName = 'First name is required.\n'
    }else if(!validateName(values.firstName)){
      errors.firstName = 'First name is incorrect.\n'
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required.\n'
    }else if(!validateName(values.lastName)){
      errors.firstName = 'Last name is incorrect.\n'
    }
    if(!values.email){
        errors.email = 'Email is Required.\n';
    }else if(!validateEmail(values.email)){
        errors.email = 'This is not a valid Email.\n';
    }
    return errors
  }
  export default validate_1