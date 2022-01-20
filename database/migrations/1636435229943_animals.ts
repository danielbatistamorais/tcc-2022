import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Animals extends BaseSchema {
  protected tableName = 'animals'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.integer('age').notNullable()
      table.string('type').notNullable()
      table.string('breed').notNullable()
      table.string('size').notNullable()
      table.boolean('adoption')
      table.boolean('help')
      table.string('primary_contact').notNullable()
      table.string('secondary_contact')


      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
