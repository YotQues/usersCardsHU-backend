const indexR = require("./index");
const usersR = require("./users");
const cardsR = require("./cards");

exports.originAllow = (app) => {
// allows recieving a payload from another domain
  app.all('*', function (req, res, next) {
    if (!req.get('Origin')) return next();
// in reality we would replace the '*' with the specific domain name
// so it would be able to send us any kind of request
    res.set('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, PATCH");
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type,x-auth-token');
    next();
  });
}

exports.routerInit = (app) => {
  app.use("/",indexR);
  app.use("/users",usersR);
  app.use("/cards",cardsR);


  app.use((req,res) => {
    res.json({msg:"Url not found , page 404 "})
  })
}

