import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export enum InsightTypes {
  clicks = "clicks",
  installs = "installs",
  spend = "spend",
  impressions = "impressions",
  ipm = "ipm",
  ctr = "ctr",
  cpm = "cpm",
  cpi = "cpi"
}

export default class CampaignInsight extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column()
  public type: string

  @column()
  public value: number

  @column()
  public rel_channel_campaigns_id: number
}
