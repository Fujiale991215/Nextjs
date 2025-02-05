
type infoType = {
    name: string;
};


export default function About(props: infoType) {
    return <div>
        {props.name}
    </div>;
}

export async function getStaticProps() {
    return {
        props: {
            name: "demo"
        }
    };
}