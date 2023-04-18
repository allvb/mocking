import fetchData from './http';

test('testing http', () => {
  expect(() => {
    fetchData('https://server/user/1');
  }).toThrowError('Mock this!');
});
