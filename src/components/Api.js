class Api {
    constructor({ baseUrl, headers }) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getInitialCards() {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
    }

    getUserInfo() {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
    }

    addCard({ link, name }) {
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers,
            method: "POST",
            body: JSON.stringify({
                name,
                link
            })
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error' + res.statusText))
    }
    
    deleteCard(cardId) {
        return fetch(this._baseUrl + '/cards/' + cardId, {
            headers: this._headers,
            method: "DELETE"
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
    }

    editUserInfo(data) {
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                name: data.name,
                about: data.title
            })
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
    }

    changeLikeStatus(cardId, boolean) {
        if (boolean) {
            return fetch(this._baseUrl + '/cards/likes/' + cardId, {
            headers: this._headers,
            method: "PUT"}) 
            .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
        } else {
            return fetch(this._baseUrl + '/cards/likes/' + cardId, {
            headers: this._headers,
            method: "DELETE"})
            .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
        }
        }
    setUserAvatar(avatar){
        return fetch(this._baseUrl + '/users/me/avatar', {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                avatar
            })
        })
        .then((res) => {res.ok ? res.json() : Promise.reject('Error!' + res.statusText)})
    }
}
export default Api;
