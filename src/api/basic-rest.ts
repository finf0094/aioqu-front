import type { AxiosInstance, AxiosResponse } from 'axios'

export abstract class BasicRest {
  protected updateAuthHeader(params: { token: string }) {
    this.endpoint.defaults.headers.common['Authorization'] = params.token
  }

  protected patchRequest<T = unknown>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.patch<T>(url, params))
  }

  protected putRequest<T = unknown>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.put<T>(url, params))
  }

  protected postRequest<T = unknown>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.post<T>(url, params))
  }

  protected getRequest<T = unknown>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.get<T>(url, { params }))
  }

  protected deleteRequest<T = unknown>(url: string, params?: object) {
    return BasicRest.dataExtract<T>(this.endpoint.delete<T>(url, { params }))
  }

  protected constructor(protected readonly endpoint: AxiosInstance) {}

  private static async dataExtract<T>(request: Promise<AxiosResponse<T>>) {
    const { data } = await request
    return data
  }
}
