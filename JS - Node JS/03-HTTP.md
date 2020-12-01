# HTTP

## SERVER BAŞLATIP YAYINLAMAK
```javascript
const http = require('http');
const server = http.createServer((request, response)=>{

    request.url
    request.headers
    // Aşağıdaki kodlar için express ile parser işlemi gerekir.
    request.params.key // GET ile gelen paramtreleri almak.
    request.body.key // POST ile gelen parametreleri almak

    response.writeHead(200, {'content-type': 'text/html; charset=utf-8'});
    response.write("htmlkodları");
    response.end();
    // HTML KODLARI DİREKT OLRAK .end(kodlar) şeklinde de yazılabilir.
});

server.listen(portno);
```


#### FARKLI YÖNTEMLE SERVER BAŞLATMAK
```javascript
const http = require('http');
const server = http.createServer();
server.on('request', (request, response)=>{

});
server.listen(portno);
```




## HTML DOSYASINI RENDER ETMEK
```javascript
const http = require('http');
const fs = require('fs');

const server = http.createServer((request,response)=>{
    fs.readFile('filename.html', (err,data)=>{
        if(err)
            throw err;

        response.end(data);
    });
});
server.listen(3000);
```

## HTTP METODLARI
GET, POST, PUT, DELETE
```javascript
http.createServer((request, response)=>{
    if(request.method === "GET"){

    }

    if(request.method === "POST"){

    }
});
```

## URL KONTROLÜ
```javascript
http.createServer((request, response)=>{
    if(request.url === "/"){

    }else if(request.url === "/login"){

    }else if(request.url === "/logout"){

    }else{

    }
});
