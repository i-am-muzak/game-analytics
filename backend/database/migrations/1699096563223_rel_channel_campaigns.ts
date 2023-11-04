import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'rel_channel_campaigns'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.boolean("is_active")

      // Foreign keys
      table.integer('campaign_id').unsigned()
      table.foreign("campaign_id").references("campaigns.id")

      table.integer('channel_id').unsigned()
      table.foreign("channel_id").references("channels.id")

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
