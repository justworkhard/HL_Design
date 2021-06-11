import request from '@/utils/request';
let api = 'http://localhost:3001'

export async function query(): Promise<any> {
  return request.get(`${api}/test`);
}
export async function testApi(): Promise<any> {
  return request.get(`${api}/test`);
}

export async function queryCurrent(): Promise<any> {
  return request('/api/currentUser');
}

export async function queryNotices(): Promise<any> {
  return request('/api/notices');
}
