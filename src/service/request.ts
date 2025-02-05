// 服务端的地址
// const HOST = 'http://127.0.0.1:2476'; //开发服务器的地址
const HOST = 'http://8.217.54.128:2476'; //生产服务器的地址

export async function get(url: string) {
    const res = await fetch(`${HOST}${url}`);
    const data = res.json();
    return data;
}

export async function post(url: string, body: any) {
    const res = await fetch(`${HOST}${url}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json', // 添加这行  
        },
        body: JSON.stringify(body)
    });
    const data = res.json();
    return data;
}