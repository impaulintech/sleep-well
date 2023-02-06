import { instance } from "../instance";

const Assessment = {
  preQuestions: () => {
    return instance.get("/user/assess/pre-questions");
  },
  mainQuestions: (data: any) => {
    return instance.post("/user/assess/main-questions", data);
  },
  setRecommendations: (data: any) => {
    return instance.post("/user/assess/given-recommendations", data);
  },
  getRecommendations: () => {
    return instance.get("/user/assess/given-recommendations");
  },
};
export default Assessment;
