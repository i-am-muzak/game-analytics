import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RelChannelCampaign from 'App/Models/RelChannelCampaign'
import Campaign from 'App/Models/Campaign'
import Channel from 'App/Models/Channel'

interface requestData {
  is_active: boolean,
  channel_id: number,
  campaign_id: number
}

export default class extends BaseSeeder {
  public async run () {
    const campaigns = await Campaign.query().where('user_id', "=", 1).orderBy("id", "desc")
    const channels = await Channel.query().where('is_active', "=", true).orderBy("id", "desc")

    var requestData: requestData[] = []

    channels.forEach(channel => {
      campaigns.forEach(campaign => {
        requestData.push(
          {
            is_active: true,
            channel_id: channel.id,
            campaign_id: campaign.id
          }
        )
      })
    })
    await RelChannelCampaign.createMany([...requestData])
  }
}
