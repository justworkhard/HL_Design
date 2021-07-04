import request from '@/utils/request';
let api: string
if (process.env.NODE_ENV === 'development') {
    api = '/api'
} else {
    api = 'http://39.103.169.137:7001'
}


export async function getEnglishList() {
    return request(`${api}/helper/wordList`, {
        method: 'GET',
    });
}
export async function addNewWord(params: any) {
    return request(`${api}/helper/add/word`, {
        method: 'POST',
        data: params
    });
}
export async function checkWord(params: any) {
    return request(`${api}/helper/checkWord`, {
        method: 'POST',
        data: params
    });
}
export async function forgetWord(params: any) {
    return request(`${api}/helper/forgetWord`, {
        method: 'POST',
        data: params
    });
}
