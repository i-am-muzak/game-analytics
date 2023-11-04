import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Campaign, {Platforms} from 'App/Models/Campaign'

export default class extends BaseSeeder {
  public async run () {
    await Campaign.createMany([
      {
        title: "Royal Match - ROAS - AAC- Scale - Android",
        platform: Platforms.Android,
        user_id: 1,
        game_id: 1
      },
      {
        title: "Royal Match - ROAS - AAC- Scale - iOS",
        platform: Platforms.iOS,
        user_id: 1,
        game_id: 1
      },
      {
        title: "Royal Match - CPI- Scale - Android",
        platform: Platforms.Android,
        user_id: 1,
        game_id: 1
      },
      {
        title: "Royal Match - Lowest- Scale - Android",
        platform: Platforms.Android,
        user_id: 1,
        game_id: 1
      },
      {
        title: "Royal Match - Lowest - Scale - iOS",
        platform: Platforms.iOS,
        user_id: 1,
        game_id: 1
      }
    ])
  }
}
