import axios from "axios";

export default {
  // API call to fetch doctor's profile
  getProfile: async id => {
    try {
      const response = await axios.get(
        "http://5e2ef38c9c29c900145dae63.mockapi.io/api/v1/doctor/" + id
      );
      return response;
    } catch (error) {
      if (error) {
        console.log(error);
        return error;
      }
    }
  }
};
