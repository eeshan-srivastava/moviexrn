import { AxiosInstance, AxiosResponse } from 'axios';

enum AxiosErrorType {
    NETWORK_ERROR = 'Error: Network Error',
}

enum ApiErrorMessages {
    NO_NETWORK = 'No network found. Please check your internet connection !',
    UNEXPECTED_ERROR = 'Unexpected error occurred!',
}

enum ApiResponseCode {
    RESPONSE_CODE_200 = 200,
    RESPONSE_CODE_401 = 401,
}

enum ApiResponseStatus {
    success = 'success',
    fail = 'fail',
}

enum ApiRequestType {
    get = 'get',
    post = 'post',
    put = 'put',
    delete = 'delete',
}

interface ApiRequestConfig {
    route: string;
    method: ApiRequestType;
    data?: any;
    axiosClient: AxiosInstance;
}

interface ApiResponseData {
    status_message?: string;
    success?: boolean;
}

interface GetApiConfig {
    route: string;
    axiosClient: AxiosInstance;
}

interface PostApiConfig {
    route: string;
    data?: Record<any, any>;
    axiosClient: AxiosInstance;
}

const makeApiRequest = async (requestConfig: ApiRequestConfig): Promise<any> => {
    const { route, method, data, axiosClient } = requestConfig;

    return new Promise(async (resolve, reject) => {
        try {
            const response: AxiosResponse = await axiosClient.request({ url: route, data, method });
            const apiResponse: ApiResponseData = response.data;
            if (apiResponse?.success === false) {
                reject(apiResponse.status_message);
            } else {
                resolve(apiResponse);
            }
        } catch (error: any) {
            reject(error);
        }
    });
};

const postRequest = (requestConfig: PostApiConfig): Promise<any> => {
    const postConfig = {
        route: requestConfig.route,
        data: requestConfig?.data,
        axiosClient: requestConfig?.axiosClient,
        method: ApiRequestType.post,
    };
    return makeApiRequest(postConfig);
};

const getRequest = (requestConfig: GetApiConfig): Promise<any> => {
    const getConfig = {
        route: requestConfig.route,
        axiosClient: requestConfig?.axiosClient,
        method: ApiRequestType.get,
    };
    return makeApiRequest(getConfig);
};

export { postRequest, getRequest, ApiErrorMessages };
