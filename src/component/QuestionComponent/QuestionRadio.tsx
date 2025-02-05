import { FC } from "react";
import styles from "./QuestionRadio.module.scss";
/** 组件属性 */
type RadioTypes = {
    componentId: string,
    componentProps: {
        title: string,
        options: Array<{ value: string, text: string; }>;
        value: string,
        isVertical: boolean;
    };
};
/**
 * 判断列表横向还是纵向排列函数 
 */
function verticalOrHorizontal(isVertical: boolean) {
    let className = "";
    if (isVertical) {
        className = 'vertical-item';
    } else {
        className = 'horizontal-item';
    }
    return className;
}
const QuestionRadio: FC<RadioTypes> = ({ componentId, componentProps }) => {
    // 解构属性
    const { title, options, value, isVertical } = componentProps;
    return <>
        <p>{title}</p>
        <ul className={styles['radio-list']}>
            {options.map((item, index) => {
                const { value: val, text } = item;
                // 判断竖向还是横向
                return <li key={val} className={styles[verticalOrHorizontal(isVertical)]}>
                    <label htmlFor="">
                        <input type="radio" name={componentId} value={val} defaultChecked={val == value} />
                        {text}
                    </label>
                </li>;
            })}
        </ul>
    </>;
};

export default QuestionRadio;