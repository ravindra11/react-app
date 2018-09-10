
export const userService = {
    register,
    getAll,
    update,
    delete: _delete
};

function getAll() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch(`http://localhost:8000/v1/workers`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://localhost:8000/v1/workers`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`http://localhost:8000/v1/workers/${user.UID}`, requestOptions).then(handleResponse);;
}

function _delete(UID) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(`http://localhost:8000/v1/workers/${UID}`, requestOptions).then(response => response.status === 204);
}

function handleResponse(response) {
    return response.text().then(data => {
        return data;
    });
}