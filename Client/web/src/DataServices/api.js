const call = (path, method = "get", data) => fetch('http://localhost:3448/' + path,
    {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(x => x.json())

export default call