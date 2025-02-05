import { get } from "@/service/request";

export async function getQuestionInfo(cardId: string) {
    const url = `/question/getQuestionById/${cardId}`;
    const data = await get(url);
    return data;
}