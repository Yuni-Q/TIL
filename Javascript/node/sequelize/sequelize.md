# sequlize

## Create
```javascript
const db = require('../models')
db.User.create({
  name: "yun",
})
```

## Update
```javascript
const db = require('../models')
db.User.update(
  {
  name: "yun",
  },
  {
    where: {
      id: 1,
    }
  }
)
```

## Delete
```javascript
const db = require('../models')
db.User.destroy({
  where: {
    id: 1.
  }
})
```

## Read
```javascript
const db = require('../models')
db.User.findAll({});
```
```javascript
const db = require('../models')
db.User.findOne({
  where: {
    id: 1,
  }
});
```

## count
```javascript
models.rooms.update(
        {
            archive_view_app_count: Sequelize.literal(' archive_view_app_count + ' + 1),
            total_view_count: Sequelize.literal(' total_view_count + ' + 1)
        },
        {
            where: {
                id: Number(req.params.roomid)
            }
        }
    );
```