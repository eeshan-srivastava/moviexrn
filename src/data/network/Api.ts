import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { logConsoleLog } from '../../utils/AppUtils';
import Environment from '../../utils/Environment';
import AppConstant from '../../utils/AppConstant';

const server_protocol = 'https';
const server_url_prod = 'api.themoviedb.org';
const server_url_stage = 'api.themoviedb.org';

const api_base_url_prod = server_protocol + '://' + server_url_prod + '/';
const api_base_url_stage = server_protocol + '://' + server_url_stage + '/';

enum apiVersions {
    v1 = '1',
    v2 = '2',
    v3 = '3',
}

const api_url =
    (Environment.AppEnvironment as any) === Environment.AppEnvironmentType.production
        ? api_base_url_prod
        : api_base_url_stage;

const api_url_v3 = api_url + apiVersions.v3;

const axios_timeout_in_millis = 5000;


const axiosConfigV3: AxiosRequestConfig = {
    baseURL: api_url_v3,
    timeout: axios_timeout_in_millis,
};

const unauthorized_axios_client_v3 = axios.create(axiosConfigV3);
const authorized_axios_client_v3 = axios.create(axiosConfigV3);

const unAuthorizedClientRequestHandler = (request: InternalAxiosRequestConfig) => {
    return addCommonHeaders(request);
};

const authorizedClientRequestHandler = async (request: InternalAxiosRequestConfig) => {
    return addCommonHeaders(request);
};

function addCommonHeaders(request: InternalAxiosRequestConfig) {
    request.headers['Authorization'] = AppConstant.AUTH_TOKEN;
    return request;
}

const commonClientResponseHandler = (response: AxiosResponse) => {
    logConsoleLog('Api Response => ');
    return response;
};

const commonRequestErrorHandler = (error: AxiosError) => {
    return Promise.reject(error);
};

const commonResponseErrorHandler = (error: AxiosError) => {
    logConsoleLog('Api Error => ', error);
    return Promise.reject(error);
};

unauthorized_axios_client_v3.interceptors.request.use(
    (request: InternalAxiosRequestConfig) => unAuthorizedClientRequestHandler(request),
    (error: AxiosError) => commonRequestErrorHandler(error),
);

authorized_axios_client_v3.interceptors.request.use(
    async (request: InternalAxiosRequestConfig) => authorizedClientRequestHandler(request),
    (error: AxiosError) => commonRequestErrorHandler(error),
);

unauthorized_axios_client_v3.interceptors.response.use(
    (response: AxiosResponse) => commonClientResponseHandler(response),
    (error: AxiosError) => commonResponseErrorHandler(error),
);

authorized_axios_client_v3.interceptors.response.use(
    (response: AxiosResponse) => commonClientResponseHandler(response),
    (error: AxiosError) => commonResponseErrorHandler(error),
);

export default {
    apiVersions,
    authorized_axios_client_v3,
    unauthorized_axios_client_v3
};
