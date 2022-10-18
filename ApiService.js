export default class ApiService {

  apiBase = 'https://akvasana.com.ua'
  apiGet = '/wp-json/as/v1/get_data/'
  apiPost = '/wp-json/as/v1/post_data/'

  // загружаем данные с сервера
  async getAllData() {
    try {
      const res = await fetch(this.apiBase + this.apiGet)
      if (!res.ok) {
        throw new Error(`Could not fetch ${apiUrl}` + `, received ${res.status}`)
      }
      return await res.json();   // массив обьектов json
    } catch (error) {
      console.error(error);
    }
  }

  /* передача данных на сервер */
  async postRequest(dataReq) {
    let Buffer = require('buffer').Buffer
    // доступ до API wordpress (application passwords)
    const username = 'vldmr'
    const password = 'yKXs jKl5 4knH Ffrr 6WNZ WAYw'

    let headers = new Headers()
    headers.append('Content-Type', 'application/json')
    headers.append('Authorization', 'Basic ' + Buffer.from(username + ":" + password).toString('base64'))

    try {
      // console.log('Данные для передачи подготовлены:');
      // console.log(dataReq);
      const res = await fetch(this.apiBase + this.apiPost, {
        method: 'POST',
        headers,
        body: JSON.stringify(dataReq),
      })
      const jsonRes = await res.json()
      switch (jsonRes.success) {
        case true: return 0  //успішна відправка замовлення
          break;
        case false: return 1  //збій при відправленні
          break;
        case undefined: return 2 //немає зв'язку з сервером або збій сервера
          break;
      }

    } catch (error) {
      console.error(error);
      return 2
    }
  }
}