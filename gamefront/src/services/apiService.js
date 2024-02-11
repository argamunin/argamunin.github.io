/* eslint-disable no-undef */
class ApiService {
  static getRequestOptions(method, data) {
    return {
      method: `${method}`,
      headers: { 'Content-Type': 'application/json' },
      body: data && JSON.stringify(data),
    };
  }

  static async handleRequest(url, requestOptions) {
    const response = await fetch(
      `${process.env.API_HOST}${url}`,
      requestOptions,
    );

    const isJson = response.headers
      .get('content-type')
      ?.includes('application/json');
    const data = isJson && (await response.json());

    // check for error response
    if (!response.ok) {
      // get error message from body or default to response status
      const error = (data && data.message) || response.status;
      return Promise.reject(error);
    }
    return data;
  }

  static async get(url) {
    const requestOptions = this.getRequestOptions('GET');
    const response = await this.handleRequest(url, requestOptions);
    return response;
  }

  static async post(url, data) {
    const requestOptions = this.getRequestOptions('POST', data);
    const response = await this.handleRequest(url, requestOptions);
    return response;
  }

  static async put(url, data) {
    const requestOptions = this.getRequestOptions('PUT', data);
    const response = await this.handleRequest(url, requestOptions);
    return response;
  }

  static async delete(url, data) {
    const requestOptions = this.getRequestOptions('DELETE', data);
    const response = await this.handleRequest(url, requestOptions);
    return response;
  }
}

export default ApiService;
