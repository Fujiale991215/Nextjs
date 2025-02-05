import { FC } from "react";
import styles from "./QuestionTextarea.module.scss";
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

const QuestionTextarea: FC<InputTypes> = (props: InputTypes) => {
    // 解构
    const { componentId, componentProps } = props;
    const { title, placeholder } = componentProps;
    return <>
        <p>{title}</p>
        <div className={styles["textarea-wrapper"]}>
            <textarea rows={5} name={componentId} placeholder={placeholder} />
        </div>
    </>;
};

export default QuestionTextarea;