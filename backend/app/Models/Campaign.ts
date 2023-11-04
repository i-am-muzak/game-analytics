import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export enum Platforms {
  Android = "android",
  iOS = "ios"
}

export default class Campaign extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public title: string

  @column()
  public platform: string

  @column()
  public user_id: number

  @column()
  public game_id: number
}
