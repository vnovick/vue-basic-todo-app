const apiService = {
    getTodos(){
        return fetch("https://api.myjson.com/bins/jiwtq").then(response => response.json())
    }
}

export default apiService