import { instance } from "../instance";

const Assessment = {
  preQuestions: () => {
    return instance.get("/user/pre-questions");
  },
  mainQuestions: (data: any) => {
    return instance.post("/user/main-questions", data);
  },
  setRecommendations: (data: any) => {
    return instance.post("/user/given-recommendations", data);
  },
  getRecommendations: () => {
    return instance.get("/user/given-recommendations");
  },
};
export default Assessment;
