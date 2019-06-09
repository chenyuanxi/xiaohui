const MongoClient = require('mongodb').MongoClient;

function DB (url, dbName, collectionName) {
  this.url = url;
  this.dbName = dbName;
  this.collectionName = collectionName;
}
// 连接数据库
DB.prototype.connect = function () {
  return new Promise ((resolve, reject) => {
    MongoClient.connect(this.url, { useNewUrlParser: true }, (err, client) => {
      if (err) {
        reject(err)
      } else {
        resolve(client)
      }
    })
  })
}
// 插入一条数据
DB.prototype.insertOne = function (document) {
  return new Promise ((resolve, reject) => {
     this.connect().then((client) => {
        const db = client.db(this.dbName);
        db.collection(this.collectionName).insertOne(document, function(err, res) {
          if (err) {
            reject(err)
          } else {
            resolve(res)
            console.log("文档插入成功")
          }
        })
        client.close()
     })
  })
}
// 插入多条数据
DB.prototype.insertMany = function (document) {
  return new Promise ((resolve, reject) => {
     this.connect().then((client) => {
        const db = client.db(this.dbName);
        db.collection(this.collectionName).insertMany(document, function(err, res) {
          if (err) {
            reject(err)
          } else {
            resolve(res)
            console.log("文档插入成功")
          }
        })
        client.close()
     })
  })
}
// 查询数据
DB.prototype.find = function (condition) {
  return new Promise ((resolve, reject) => {
     this.connect().then((client) => {
        const db = client.db(this.dbName);
        db.collection(this.collectionName).find(condition).toArray(function (err, res) {
          if (err) {
            reject(err)
          } else {
            resolve(res)
            console.log("文档查找成功")
          }
        })
        client.close()
     })
  })
}
// 更新某条数据
DB.prototype.updateOne = function (document, updateDocument) {
  return new Promise ((resolve, reject) => {
     this.connect().then((client) => {
        const db = client.db(this.dbName);
        db.collection(this.collectionName).updateOne(document, updateDocument, function(err, res) {
          if (err) {
            reject(err)
          } else {
            resolve(res)
            console.log("文档更新成功")
          }
        })
        client.close()
     })
  })
}
// 更新多条数据
DB.prototype.updateMany = function (document, updateDocument) {
  return new Promise ((resolve, reject) => {
     this.connect().then((client) => {
        const db = client.db(this.dbName);
        db.collection(this.collectionName).updateMany(document, updateDocument, function(err, res) {
          if (err) {
            reject(err)
          } else {
            resolve(res)
            console.log("文档更新成功")
          }
        })
        client.close()
     })
  })
}
// 删除某条数据
DB.prototype.deleteOne = function (condition) {
  return new Promise ((resolve, reject) => {
     this.connect().then((client) => {
        const db = client.db(this.dbName);
        db.collection(this.collectionName).deleteOne(condition, function(err, res) {
          if (err) {
            reject(err)
          } else {
            resolve(res)
            console.log("数据删除成功")
          }
        })
        client.close();
     })
  })
}
// 删除多条数据
DB.prototype.deleteMany = function (condition) {
  return new Promise ((resolve, reject) => {
     this.connect().then((client) => {
        const db = client.db(this.dbName);
        db.collection(this.collectionName).deleteMany(condition, function(err, res) {
          if (err) {
            reject(err)
          } else {
            resolve(res)
            console.log("数据删除成功")
          }
        })
        client.close();
     })
  })
}

module.exports = DB
