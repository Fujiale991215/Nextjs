import type { NextApiRequest, NextApiResponse } from "next";
import { postAnswer } from "@/service/answer";
/**
 * 生成答卷信息 
 */
function genAnswerInfo(reqBody: any) {

    // 答卷列表
    const answerList: any = [];
    Object.keys(reqBody).forEach((key: any) => {
        if (key == 'cardId') return;
        answerList.push({
            componentId: key,
            value: reqBody[key]
        });
    });
    return {
        cardId: reqBody.cardId || "",
        answerList
    };
}


export default async function answer(req: NextApiRequest, res: NextApiResponse) {
    // 验证请求方式
    if (req.method !== "POST") {
        res.status(200).json({ code: 500, msg: "请求方式错误" });
    }
    // 获取并格式化表单数据
    const answerInfo = genAnswerInfo(req.body);
    try {
        // 获取并格式化表单数据
        const resData = await postAnswer(answerInfo);
        if (resData.code == 200) {
            // 提交成功
            res.redirect("/success");
        } else {
            // 提交失败
            res.redirect("/fail");
        }
    } catch (error) {
        res.redirect("/fail");
    }
}