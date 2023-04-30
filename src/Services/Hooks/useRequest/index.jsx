import axios from 'axios';
import { getItem } from '../../Utility/LocalStorage';

export default function useRequest() {
    const BASE_URL = 'https://api.rgb.irpsc.com/api/';
    const user = getItem('user');

    const HTTP_METHOD = {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE',
        PATCH: 'PATCH'
    }

    function Request(directory, method = 'GET', formData = {}, customHeader = {}) {
        return axios.request({
            url: BASE_URL + directory,
            method,
            headers: {
                Authorization: user?.token ? `Bearer ${user?.token}` : null,
                ...customHeader
            },
            data: formData
        });
    }

    return { Request, HTTP_METHOD }
}