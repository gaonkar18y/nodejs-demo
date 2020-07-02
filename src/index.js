import http from 'http';

const middleware = (req, res) => {

    res.write('Hello Node js');
    res.end();
}

const server =  http.createServer(middleware);

server.listen(9000,()=>{
    console.log('Server listening on %s:%d', server.address().address ,server.address().port);
});
