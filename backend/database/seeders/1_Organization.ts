import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Organization from "App/Models/Organization";

export default class extends BaseSeeder {
  public async run () {
    await Organization.createMany([
      {
        email: "muzak@company.net",
        title: "Muzak Studios"
      }
    ])
  }
}
