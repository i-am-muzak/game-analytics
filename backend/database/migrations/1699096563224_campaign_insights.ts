import BaseSchema from '@ioc:Adonis/Lucid/Schema'


export default class extends BaseSchema {
  protected tableName = 'campaign_insights'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string("type")
      table.double("value")

      // Foreign keys
      table.integer('rel_channel_campaigns_id').unsigned()
      table.foreign("rel_channel_campaigns_id").references("rel_channel_campaigns.id")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
