var http = require('http'),
    st   = require('node-static'),
    opts = { cache: false },
    // file = new st.Server('./app', opts),
    file = new st.Server('./', opts),
    port = process.env.PORT || 8080;

http.createServer(function (req, res) {
    file.serve(req, res);
}).listen(port);

console.log("Node server running on http://localhost:%s", port);
