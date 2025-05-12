import { apiRequest } from "../../api/api";
import { SurveyAnswersProps } from "./dashboard.types";

export const sendSurveyResponses = async (body: SurveyAnswersProps) =>
    apiRequest({
        route: "auth/responses",
        method: "POST",
        body,
    })
