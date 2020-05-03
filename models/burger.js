varm orm = require ("../config/orm")

// callback orm
var burger = {
selectAll: function (cb) {
    orm.selectAll("burger", function(res){
        cb(res);

    });
},

insert: function(cols, vals, cb) {
    orm.insertOne("burgers", cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.updateOne("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

module.exports = burger;
