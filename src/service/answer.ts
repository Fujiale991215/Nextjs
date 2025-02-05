import { post } from "@/service/request";

/**
 * 提交答卷(对接服务端) 
 */
export async function postAnswer(answerInfo: any) {
    const data = await post("/question/answer", answerInfo);
    return data;
}