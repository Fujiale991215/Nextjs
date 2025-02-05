import { FC } from "react";
import styles from "./QuestionInput.module.scss";
/** 属性数据 */
type InputTypes = {
    /** 组件ID */
    componentId: string,
    /** 组件属性 */
    componentProps: {
        title: string,
        placeholder?: string,
    },
};

const QuestionInput: FC<InputTypes> = (props: InputTypes) => {
    // 解构
    const { componentId, componentProps } = props;
    const { title, placeholder } = componentProps;
    return <>
        <p>{title}</p>
        <div className={styles["input-wrapper"]}>
            <input type="text" name={componentId} placeholder={placeholder} />
        </div>
    </>;
};

export default QuestionInput;