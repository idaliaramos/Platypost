const validatePassword = require('./LoginUtils');

test('it checks to see if password is at least 6 characters', () => {
  expect(validatePassword('123456')).toBe(true);
});

test('it returns false when less than 6', () => {
  expect(validatePassword('12345')).toBe(false);
});
