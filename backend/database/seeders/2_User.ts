import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User, {Groups} from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    await User.createMany([
      {
        email: "hasanmuzak@yahoo.com",
        password: "123456789",
        organization_id: 1,
        group: Groups.Admin.toString()
      }
    ])
  }
}
