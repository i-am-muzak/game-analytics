import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import User, { Groups } from "App/Models/User";

export default class extends BaseSeeder {
  public async run() {
    await User.createMany([
      {
        email: "demo@hasanmuzak.com",
        password: "12345demo",
        first_name: "Hasan",
        last_name: "Muzak",
        avatar: "https://images.unsplash.com/photo-1480455624313-e29b44bbfde1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D",
        organization_id: 1,
        group: Groups.Admin.toString(),
      },
    ]);
  }
}
