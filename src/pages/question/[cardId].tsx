
import PageWrapper from "@/component/PageWrapper";
import { getQuestionInfo } from "@/service/question";
import { getComponent } from "@/component/QuestionComponent";
import styles from "@/styles/question.module.scss";
type infoType = {
    code: number,
    data?: {
        cardId: string,
        title: string;
        css?: string,
        js?: string,
        desc?: string;
        isPublished: boolean,
        isDeleted: boolean,
        componentList: Array<any>;
    },
    msg?: string;
};
export default function Question(props: infoType) {
    const { code, data, msg = "" } = props;
    // 如果请求错误的处理
    if (code !== 200) {
        return <PageWrapper title="错误">
            <h1>错误</h1>
            <p>{msg}</p>
        </PageWrapper>;
    }
    const { cardId, title = "", isDeleted, desc, isPublished, componentList = [] } = data || {};
    // 已经被删除的问卷错误
    if (isDeleted) {
        return <PageWrapper title={title} desc={desc}>
            <h1>{title}</h1>
            <p>该问卷已被删除</p>
        </PageWrapper>;
    }
    // 尚未发布的问卷错误
    if (!isPublished) {
        return <PageWrapper title={title} desc={desc}>
            <h1>{title}</h1>
            <p>该问卷尚未发布</p>
        </PageWrapper>;
    }

    // 遍历组件
    const componentListEle = <>
        {
            componentList.map(item => {
                const Component = getComponent(item);
                return <div key={item.componentId} className={styles["component-wrapper"]}>
                    {Component}
                </div>;
            })}
    </>;
    return <PageWrapper title={title}>
        <form method="POST" action="/api/answer">
            <input type="hidden" name="cardId" value={cardId} />
            {componentListEle}
            <div className={styles['submit-button']}>
                <input type="submit" value="提交" />
            </div>
        </form>
    </PageWrapper>;
}

export async function getServerSideProps(context: any) {
    const { cardId = "" } = context.params;
    // 根据问卷ID获取问卷信息
    const data = await getQuestionInfo(cardId);
    return {
        props: {
            ...data
        }
    };
}