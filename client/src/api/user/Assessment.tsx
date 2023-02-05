import { instance } from "../instance";

const Assessment = {
  preQuestions: () => { 
    return instance.get('/user/pre-questions');
  },
};
export default Assessment;
