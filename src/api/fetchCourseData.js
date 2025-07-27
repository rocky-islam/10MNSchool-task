import axios from 'axios';

const fetchCourseData = async (lang = 'en') => {
  const response = await axios.get(
    `https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=${lang}`,
    {
      headers: {
        'X-TENMS-SOURCE-PLATFORM': 'web',
        accept: 'application/json',
      },
    }
  );
  return response.data;
};

export default fetchCourseData;
