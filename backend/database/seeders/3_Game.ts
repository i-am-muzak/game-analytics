import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Game from 'App/Models/Game'

export default class extends BaseSeeder {
  public async run () {
    await Game.createMany([
      {
        title: "Royal Match",
        android_package_id: "com.dreamgames.royalmatch",
        ios_package_id: "id1482155847",
        organization_id: 1,
        logo: "https://play-lh.googleusercontent.com/Yzo1v-lQVzqZkuMaJDVE-USRWpgOkCDbIJxqOhBeu29b9eTtB5EMAb0W-9_wmZqpcpAG=s48"
      }
    ])
  }
}
