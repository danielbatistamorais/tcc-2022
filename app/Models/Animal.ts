import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Animal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: String

  @column()
  public description: String

  @column()
  public age: Number

  @column()
  public type: String

  @column()
  public breed: String

  @column()
  public size: String

  @column()
  public adoption: boolean

  @column()
  public help: boolean

  @column()
  public primaryContact: String

  @column()
  public secondaryContact: String

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
