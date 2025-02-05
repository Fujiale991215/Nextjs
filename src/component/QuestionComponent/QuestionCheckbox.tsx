import { FC, useEffect, useState } from "react";
import styles from "@/component/QuestionComponent/QuestionCheckbox.module.scss";
type QuestionCheckboxProps = {
    componentId: string,
    componentProps: {
        title: string,
        isVertical?: boolean,
        list: Array<{
            value: string, text: string, checked: boolean;
        }>;
    };
};

const QuestionCheckbox: FC<QuestionCheckboxProps> = ({ componentId, componentProps }) => {
    // 解构
    const { title, isVertical, list = [] } = componentProps;
    // 收集选中的选项
    const [selectedValues, setSelectedValues] = useState<string[]>([]);
    // 初始化,判断默认选中
    useEffect(() => list.forEach(item => {
        const { value, checked } = item;
        if (checked) {
            setSelectedValues(selectedValues => selectedValues.concat(value));
        }
    }), [list]);
    // 选项框变化的事件
    const handleChange = (value: string) => {
        if (selectedValues.includes(value)) {
            // 已经选中了,取消选择
            setSelectedValues(selectedValues => selectedValues.filter(item => item !== value));
        } else {
            // 没有选中,添加选择
            setSelectedValues(selectedValues.concat(value));
        }
    };
    return <>
        <p>{title}</p>
        <input type="hidden" name={componentId} value={selectedValues.toString()} />
        <ul className={styles['list']}>
            {
                list.map((item, index) => {
                    const { value, text, checked } = item;
                    let className = "";
                    // 判断横向纵向
                    if (isVertical) className = styles['vertical-item'];
                    else className = styles['horizontal-item'];

                    return <li key={value} className={className}>
                        <label>
                            <input type="checkbox" checked={selectedValues.includes(value)} onChange={() => handleChange(value)} />
                            {text}
                        </label>
                    </li>;
                })
            }
        </ul>
    </>;
};
export default QuestionCheckbox;