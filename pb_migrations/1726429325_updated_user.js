/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2b5qsvdo7uv9ux")

  // remove
  collection.schema.removeField("9r81ienw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bkon06fx",
    "name": "createdDate",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("j2b5qsvdo7uv9ux")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9r81ienw",
    "name": "createdDate",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // remove
  collection.schema.removeField("bkon06fx")

  return dao.saveCollection(collection)
})
