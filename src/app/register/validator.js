const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
function validatePhoneNumber(input_str) {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    return re.test(input_str);
}
const validate = values => {
    const errors = {}
    if(!values.prefix){
        errors.prefix = 'Prefix is required.\n';
    }
    if (!values.firstName) {
      errors.firstName = 'First name is required.\n'
    }
    if (!values.lastName) {
      errors.lastName = 'Last name is required.\n'
    }
    if(!values.email){
        errors.email = 'Email is Required.\n';
    }else if(!validateEmail(values.email)){
        errors.email = 'This is not a valid Email.\n';
    }
    if (!values.company) {
      errors.company = 'Company is required.\n'
    }
    if (!values.jobTitle) {
        errors.jobTitle = 'Job tittle is required.\n'
      }
    if (!values.address) {
        errors.address = 'Address is required.\n'
    }
    if (!values.country) {
        errors.country = 'Country is required.\n'
    }
    if (!values.city) {
        errors.city = 'City is required.\n'
    }
    if (!values.state) {
        errors.state = 'State is required.\n'
    }
    if (!values.zip) {
        errors.zip = 'Zip is required.\n'
    }
    if (!values.phone) {
        errors.phone = 'Phone Number is required.\n'
    }else if(!validatePhoneNumber(values.phone)){
        errors.phone = 'This is not a valid Phone Number.\n'
    }
    return errors
  }
  export default validate