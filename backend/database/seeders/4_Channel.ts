import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import Channel from "App/Models/Channel";

export default class extends BaseSeeder {
  public async run() {
    await Channel.createMany([
      {
        title: "Facebook",
        is_active: true,
      },
      {
        title: "Unity",
        is_active: true,
      },
      {
        title: "Tiktok",
        is_active: true,
      },
      {
        title: "Google Adwords",
        is_active: true,
      },
      {
        title: "ironSource",
        is_active: true,
      },
      {
        title: "AdMob",
        is_active: true,
      },
      {
        title: "Applovin",
        is_active: true,
      },
      {
        title: "AdColony",
        is_active: true,
      },
      {
        title: "ChartBoost",
        is_active: true,
      },
      {
        title: "InMobi",
        is_active: true,
      },
    ]);
  }
}
