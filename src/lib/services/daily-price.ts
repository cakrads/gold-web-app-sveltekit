/* eslint-disable no-console */
import { db, schema } from '$lib/db';
import { desc, eq } from 'drizzle-orm';

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

	public async instert(data: DailyPriceCreate): Promise<void> {
		const result = await db.insert(schema.dailyPrice).values(data);

		console.log('insert success', { result });
	}

	public async instertMultiple(data: DailyPriceCreate[]): Promise<void> {
		const result = await db.insert(schema.dailyPrice).values(data);

		console.log('insert multiple success', { result });
	}

	public async updateById(id: number, data: DailyPriceCreate): Promise<void> {
		const result = await db.update(schema.dailyPrice).set(data).where(eq(schema.dailyPrice.id, id));

		console.log({ result });
	}

	public async getDailyPrice(): Promise<DailyPrice[]> {
		const data = await db.query.dailyPrice.findMany();
		return data;
	}

	public async getLatestData(): Promise<DailyPrice | undefined> {
		const data = await db
			.select()
			.from(schema.dailyPrice)
			.orderBy(desc(schema.dailyPrice.id))
			.execute();

		if (!data) {
			return {} as DailyPrice;
		}

		return data[0];
	}

	public async deleteAll() {
		return await db.delete(schema.dailyPrice);
	}
}

const singletonDailyPriceService = DailyPriceService.getInstance();
export default singletonDailyPriceService;
