import axios from 'axios';
import {BaseUrl} from '../../../../../staging';

const usegetUserDetails = () => {
  const getUserDetails = async (page: number) => {
    let response = false;
    try {
      let res = await axios.get(`${BaseUrl}?page=${page}&results=${10}`);
      response = res?.data;
    } catch (err) {
      response = false;
    }
    return response;
  };

  return {getUserDetails};
};

export default usegetUserDetails;
