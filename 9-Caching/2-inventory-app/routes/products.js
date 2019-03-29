var express = require('express');
var router = express.Router();

const sqlite3 = require('sqlite3').verbose();
const memoryCache = require('memory-cache');
const flatCache = require('flat-cache')
const redis = require('redis')
const client = redis.createClient();



let memCache = new memoryCache.Cache();
let memCacheMiddleware = (duration) => {
  return (req, res, next) => {
    let key = '__express__' + req.originalUrl || req.url
    let cacheContent = memCache.get(key);
    if (cacheContent) {
      res.send(cacheContent);
      return
    } else {
      res.sendResponse = res.send
      res.send = (body) => {
        memCache.put(key, body, duration * 1000);
        res.sendResponse(body)
      }
      next()
    }
  }
}


// load new cache
let productsCache = flatCache.load('productsCacheNew');
// optionally, you can go ahead and pass the directory you want your
// cache to be loaded from by using this
// let cache = flatCache.load('productsCache', path.resolve('./path/to/folder')

// create flat cache routes
let flatCacheMiddleware = (req, res, next) => {
  let key = '__express__' + req.originalUrl || req.url
  let cacheContent = productsCache.getKey(key);
  if (cacheContent) {
    res.send(cacheContent);
  } else {
    res.sendResponse = res.send
    res.send = (body) => {
      productsCache.setKey(key, body);
      productsCache.save();
      res.sendResponse(body)
    }
    next()
  }
};


// create redis middleware
let redisCacheMiddleware = (req, res, next) => {
  let key = "__expIress__" + req.originalUrl || req.url;
  client.get(key, function (err, reply) {
    if (reply) {
      res.send(reply);
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        client.set(key, JSON.stringify(body));
        res.sendResponse(body);
      }
      next();
    }
  });
};


router.get('/', redisCacheMiddleware, function (req, res) {
  setTimeout(() => {
    let db = new sqlite3.Database('./NodeInventory.db'); // SQL | NoSQL | REST ...
    let sql = `SELECT * FROM products`;
    db.all(sql, [], (err, rows) => {
      if (err) {
        throw err;
      }
      db.close();
      res.send(rows);
    });
    // this was wrapped in a setTimeout function to intentionally simulate a slow 
    // request
  }, 3000);


});

module.exports = router;
