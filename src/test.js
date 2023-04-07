import fetchData from './http';
import getLevel from './getLevel';

jest.mock('./http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing mock', () => {
  fetchData.mockReturnValue(JSON.stringify({}));

  const response = getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
  expect(response).toBe('Информация об уровне временно недоступна');
});
