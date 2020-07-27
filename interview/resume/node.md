# node 
1. 怎么启动node服务器?

答：

```js
    const http = require('http');
    const serverHadnle = require('../app');


    const server = http.createServer(serverHadnle);
    const port = 3000;

    server.listen(port,()=>{
        console.log('启动成功3000端口')
    }); 
```
2. 用过什么框架？
答：express
    + 怎么启动服务器？
        ```js
            var createError = require('http-errors');
            var express = require('express');
            var path = require('path');
            var cookieParser = require('cookie-parser');
            var logger = require('morgan');

            // var indexRouter = require('./routes/index');
            // var usersRouter = require('./routes/users');
            let blogRouter = require('./routes/blog');
            let userRouter = require('./routes/user')

            var app = express();

            // view engine setup
            // app.set('views', path.join(__dirname, 'views'));
            // app.set('view engine', 'jade');

            app.use(logger('dev'));
            app.use(express.json());
            app.use(express.urlencoded({ extended: false }));
            app.use(cookieParser());
            // app.use(express.static(path.join(__dirname, 'public')));

            // app.use('/', indexRouter);
            // app.use('/users', usersRouter);
            app.use('/api/blog', blogRouter);
            app.use('/api/user', userRouter);

            // catch 404 and forward to error handler
            app.use(function(req, res, next) {
            next(createError(404));
            });

            // error handler
            app.use(function(err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'dev' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error');
            });

            module.exports = app;
        ```