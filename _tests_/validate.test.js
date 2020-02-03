import formValidate from 'Src/util/validate';

describe('userInfo logic test', () => {
  test(
    'userInfo is empty',
    () => {
      const userInfo = {
        name: '',
        email: '',
        remail: '',
      };

      expect(formValidate(userInfo)).toBe('Please Enter Info!');
    },
  );
  test(
    'name is too short',
    () => {
      const userInfo = {
        name: 'ab',
        email: '',
        remail: '',
      };

      expect(formValidate(userInfo)).toBe('Name should be at least 3 characters');
    },
  );
  test(
    'email is empty',
    () => {
      const userInfo = {
        name: 'test',
        email: '',
        remail: '',
      };

      expect(formValidate(userInfo)).toBe('Please enter valid email');
    },
  );
  test(
    'email format is not correct',
    () => {
      const userInfo = {
        name: 'test',
        email: 'test@test',
        remail: 'test@test',
      };

      expect(formValidate(userInfo)).toBe('Please enter valid email');
    },
  );
  test(
    'second email is not match',
    () => {
      const userInfo = {
        name: 'test',
        email: 'test@test.com',
        remail: 'haha@test.com',
      };

      expect(formValidate(userInfo)).toBe('Ur email does not match');
    },
  );
});
