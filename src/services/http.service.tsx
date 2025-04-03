import axiosInstance from "./axios.service";
abstract class HttpService {
  #config: any;
  #setConfig(config: any) {
    let headers: any = {
      "Content-Type": "application/json",
    };
    let params: any = {};

    //confing
    if (config.file || config.files) {
      headers = {
        "Content-Type": "multipart/form-data",
      };
    }
    //auth
    if (config.auth) {
      let token = ""; //TODO: Token set
      headers = {
        ...headers,
        Authorization: `Bearer` + token,
      };
    }

    //params
    if (config.params) {
      params = config.params;
    }

    this.#config = {
      headers: headers,
      params: params,
    };
  }

  async get(url: string, config: any = {}) {
    try {
      this.#setConfig(config);
      let { data: responseData, status } = await axiosInstance.get(
        url,
        this.#config
      );
      return { data: responseData, status };
    } catch (exception) {
      // console.log(exception);
      throw exception;
    }
  }
  async post(url: string, data: any, config: any = {}) {
    try {
      this.#setConfig(config);
      let { data: responseData, status } = await axiosInstance.post(
        url,
        data,
        this.#config
      );
      return { data: responseData, status };
    } catch (exception) {
      // console.log(exception);
      throw exception;
    }
  }
  async put(url: string, data: any, config: any = {}) {
    try {
      this.#setConfig(config);
      let { data: responseData, status } = await axiosInstance.put(
        url,
        data,
        this.#config
      );
      return { data: responseData, status };
    } catch (exception) {
      // console.log(exception);
      throw exception;
    }
  }
  async patch(url: string, data: any, config: any = {}) {
    try {
      this.#setConfig(config);
      let { data: responseData, status } = await axiosInstance.patch(
        url,
        data,
        this.#config
      );
      return { data: responseData, status };
    } catch (exception) {
      // console.log(exception);
      throw exception;
    }
  }
  async delete(url: string, config: any = {}) {
    try {
      this.#setConfig(config);
      let { data: responseData, status } = await axiosInstance.delete(url, {});
      return { data: responseData, status };
    } catch (exception) {
      // console.log(exception);
      throw exception;
    }
  }
}
export default HttpService;
