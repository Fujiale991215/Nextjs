import { FC, CSSProperties } from "react";

type QuestionInfoProps = {
    text: string,
    desc?: boolean,
};

const QuestionInfo: FC<QuestionInfoProps> = ({ text, desc }) => {
    return <div style={{ textAlign: "center" }}>
        <h1>{text}</h1>
        <p>{desc}</p>
    </div>;
};

export default QuestionInfo;