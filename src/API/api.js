import axios from "axios";

const BASE_URL = 'https://6065edd9b8fbbd0017567bab.mockapi.io';

const request = endpoind => `${BASE_URL}/${endpoind}`;

export const fetch = async() => {
  const response = await axios.get(request('product'));
  const { data } = response;

  return data;
}