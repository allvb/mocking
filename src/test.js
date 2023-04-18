import fetchData from './http';
import getLevel from './getLevel';

jest.mock('./http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('testing mock', () => {
  let mockResponce = { status: 'ok', level: 3 };
  fetchData.mockReturnValue(mockResponce);

  let response = getLevel(1);
  expect(fetchData).toBeCalledWith('https://server/user/1');
  expect(response).toEqual('Ваш текущий уровень: 3');

  mockResponce = { status: 'lost', level: 2 };
  fetchData.mockReturnValue(mockResponce);
  response = getLevel(1);
  expect(response).toEqual('Информация об уровне временно недоступна');
});
