// 统一分配配置组件
import QuestionInput from "./QuestionInput";
import QuestionRadio from "./QuestionRadio";
import QuestionTitle from "./QuestionTitle";
import QuestionParagraph from "./QuestionParagraph";
import QuestionInfo from "./QuestionInfo";
import QuestionTextarea from "./QuestionTextarea";
import QuestionCheckbox from "./QuestionCheckbox";
type componentInfoType = {
    componentId: string,
    componentType: string,
    componentTitle: string,
    isHidden: boolean,
    componentProps: any;
};

export const getComponent = (component: componentInfoType) => {
    // 解构
    const { componentId, componentType, componentTitle, isHidden, componentProps } = component;

    if (isHidden) {
        return null;
    }

    switch (componentType) {
        case "questionInput":
            return <QuestionInput componentId={componentId} componentProps={componentProps} />;
        case "questionRadio":
            return <QuestionRadio componentId={componentId} componentProps={componentProps} />;
        case "questionTitle":
            return <QuestionTitle {...componentProps} />;
        case "questionParagraph":
            return <QuestionParagraph {...componentProps} />;
        case "questionInfo":
            return <QuestionInfo {...componentProps} />;
        case "questionTextarea":
            return <QuestionTextarea componentId={componentId} componentProps={componentProps} />;
        case "questionCheckbox":
            return <QuestionCheckbox componentId={componentId} componentProps={componentProps} />;
    }
};