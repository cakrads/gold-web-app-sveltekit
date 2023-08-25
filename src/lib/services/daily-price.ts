import type { schema } from '$lib/db';
// import { eq } from 'drizzle-orm';
import DAILY_PRICE_DATA from './daily-price-data.json';

export type DailyPrice = schema.DailyPrice;
export type DailyPriceCreate = schema.DailyPriceCreate;

class DailyPriceService {
  private static instance: DailyPriceService;

  constructor() {
    //
  }

  public static getInstance(): DailyPriceService {
    if (!DailyPriceService.instance) {
      DailyPriceService.instance = new DailyPriceService();
    }

    return DailyPriceService.instance;
  }

  public getDailyPrice(): DailyPrice[] {
    return DAILY_PRICE_DATA.map(item => {
      const data = {} as DailyPrice;
      data.sellPrice = item.sellPrice;
      data.date = item.date;
      return data;
    });
  }

}

const singletonDailyPriceService = DailyPriceService.getInstance();
export default singletonDailyPriceService;
