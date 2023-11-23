function validatePhoneNumber(input_str) {
    return true;
    // var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
  
    // return re.test(input_str);
}
const validate_2 = values => {
    const errors = {}
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
  export default validate_2