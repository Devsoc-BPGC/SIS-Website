const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
const validate_3 = (values) => {
  const errors = {};
  if (!values.gfirstName) {
    errors.gfirstName = "First name is required.\n";
  }
  if (!values.glastName) {
    errors.glastName = "Last name is required.\n";
  }
  if (!values.gemail) {
    errors.gemail = "Email is Required.\n";
  } else if (!validateEmail(values.gemail)) {
    errors.gemail = "This is not a valid Email.\n";
  }
  if (values.gsame === "no") {
    if (!values.gaddress) {
      errors.address = "Address is required.\n";
    }
    if (!values.gcountry) {
      errors.country = "Country is required.\n";
    }
    if (!values.gcity) {
      errors.city = "City is required.\n";
    }
    if (!values.gstate) {
      errors.state = "State is required.\n";
    }
    if (!values.gzip) {
      errors.zip = "Zip is required.\n";
    }
    if (!values.gphone) {
      errors.phone = "Phone Number is required.\n";
    }
  }
  return errors;
};
export default validate_3;
