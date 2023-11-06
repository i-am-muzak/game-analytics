import BaseSeeder from "@ioc:Adonis/Lucid/Seeder";
import CampaignInsight, { InsightTypes } from "App/Models/CampaignInsight";
import RelChannelCampaign from "App/Models/RelChannelCampaign";
import { DateTime } from "luxon";

interface RequestData {
  type: string;
  createdAt: DateTime;
  value: number;
  rel_channel_campaigns_id: number;
}

function randomIntFromInterval(min, max): number {
  return Math.floor((Math.random() * (max - min + 1) + min) * 100) / 100;
}

export default class extends BaseSeeder {
  public async run() {
    const campaigns = await RelChannelCampaign.all();
    const start_date = DateTime.now().minus({ year: 1 });

    var requestData: RequestData[] = [];

    campaigns.forEach(async (campaign) => {
      let count = 0;
      while (count <= 180) {
        count++;
        const clickValue = Math.floor(randomIntFromInterval(20000, 40000));
        const installValue = Math.floor(randomIntFromInterval(1000, 12000));
        const impressionValue = Math.floor(
          randomIntFromInterval(100000, 200000)
        );
        const spendValue = randomIntFromInterval(300, 1000);
        const ipm = (installValue * 1000) / impressionValue;
        const ctr = clickValue / impressionValue;
        const cpm = (spendValue * 1000) / impressionValue;
        const cpi = spendValue / installValue;

        requestData.push(
          {
            type: InsightTypes.clicks,
            createdAt: start_date.plus({ days: count }),
            value: clickValue,
            rel_channel_campaigns_id: campaign.id,
          },
          {
            type: InsightTypes.installs,
            createdAt: start_date.plus({ days: count }),
            value: installValue,
            rel_channel_campaigns_id: campaign.id,
          },
          {
            type: InsightTypes.impressions,
            createdAt: start_date.plus({ days: count }),
            value: impressionValue,
            rel_channel_campaigns_id: campaign.id,
          },
          {
            type: InsightTypes.spend,
            createdAt: start_date.plus({ days: count }),
            value: impressionValue,
            rel_channel_campaigns_id: campaign.id,
          },
          {
            type: InsightTypes.ipm,
            createdAt: start_date.plus({ days: count }),
            value: ipm,
            rel_channel_campaigns_id: campaign.id,
          },
          {
            type: InsightTypes.cpm,
            createdAt: start_date.plus({ days: count }),
            value: cpm,
            rel_channel_campaigns_id: campaign.id,
          },
          {
            type: InsightTypes.ctr,
            createdAt: start_date.plus({ days: count }),
            value: ctr,
            rel_channel_campaigns_id: campaign.id,
          },
          {
            type: InsightTypes.cpi,
            createdAt: start_date.plus({ days: count }),
            value: cpi,
            rel_channel_campaigns_id: campaign.id,
          }
        )
      }
    });

    await CampaignInsight.createMany(requestData)
  }
}
