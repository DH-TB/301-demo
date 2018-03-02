export const get = async (url) => {
    try {
        const res = await fetch(url, {
            method: 'GET',
            credentials: 'include',
            headers: new Headers({
                    'Accept': 'application/json;charset=utf-8',
                    'Content-Type': 'application/json'
                }
            ),
        });
        const body = await res.json();
        const status = res.status;

        return Object.assign({}, {body}, {status})
    } catch (ex) {
        return {status: ex.status}
    }
};

export const post = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: new Headers({
                    'Accept': 'application/json;charset=utf-8',
                    'Content-Type': 'application/json'
                }
            ),
            body: JSON.stringify(data)
        });

        return {status: res.status}
    } catch (ex) {
        return {status: ex.status}
    }
};

export const put = async (url, data) => {
    try {
        const res = await fetch(url, {
            method: 'PUT',
            headers: new Headers({
                    'Accept': 'application/json;charset=utf-8',
                    'Content-Type': 'application/json'
                }
            ),
            body: JSON.stringify(data)
        });

        return {status: res.status}
    } catch (ex) {
        return {status: ex.status}
    }
};

export const del = async (url) => {
    try {
        const res = await fetch(url, {
            method: 'DELETE',
            headers: new Headers({
                    'Accept': 'application/json;charset=utf-8',
                    'Content-Type': 'application/json'
                }
            )
        });

        return {status: res.status}
    } catch (ex) {
        return {status: ex.status}
    }
};

