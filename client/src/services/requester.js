const requester = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }


    const serializedAuth = localStorage.getItem('auth');

    if (serializedAuth) {
        const auth = JSON.parse(serializedAuth);

        if (auth.accessToken) {
            options.headers = {
                ...options.headers,
                'X-Authorization': auth.accessToken,
            };
        }
    }

    const response = await fetch(url, options);

    if (response.status === 204 || response.status === 404) {
        return [];
    }
    if (response === 'undefined' || response === null) {
        throw new Error('response is  null or undefined');
    }


    // console.log(response)
    // console.log(response.status)

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
};

export const requestFactory = () => {

    return {
        get: requester.bind(null, 'GET'),
        post: requester.bind(null, 'POST'),
        put: requester.bind(null, 'PUT'),
        patch: requester.bind(null, 'PATCH'),
        delete: requester.bind(null, 'DELETE'),
    }
};
