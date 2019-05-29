const http = require("http");

const server = http.createServer((req, res) => {
    res.end("\n *** Hello from the Stupid container! *** \n\n")
})

server.listen(3000, () => console.log("Server running on port 3000"));