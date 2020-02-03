const formValidate = (form) => {
  if (!form.name && !form.email) {
    return 'Please Enter Info!';
  }

  const { name, email, remail } = form || {}
  const emailPattern = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;

  if (name.length - 3 < 0) {
    return 'Name should be at least 3 characters'
  }
  if (!emailPattern.test(email)) {
    return 'Please enter valid email';
  }
  if (email !== remail) {
    return 'Ur email does not match';
  }

  return '';
};

export default formValidate;
