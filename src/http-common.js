import axios from 'axios';

const appId = '7fNT9oRcLFhonCEOlR1G';
export default axios.create({
  baseURL: `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${appId}`,
  headers: {
    'Content-type': 'application/json',
  },
});
