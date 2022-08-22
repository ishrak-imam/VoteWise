import {server} from '../mocks/server';
import fetch from 'cross-fetch';

global.fetch = fetch;

beforeAll(() => {
  server.listen({onUnhandledRequest: 'error'});
});

// // Reset any request handlers that we may add during the tests,
// // so they don't affect other tests.
afterEach(() => server.resetHandlers());

// // Clean up after the tests are finished.
afterAll(() => server.close());
