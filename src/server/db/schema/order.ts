import { sql } from "drizzle-orm";
import { int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { customer } from "./customer";

export const order = sqliteTable("order",{
    id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
    customer_id: int("customerId", {mode: "number"}).references(() => customer.id),
    orderDate: text("orderDate").notNull().default(sql`(current_timestamp)`),
    total_items: int("totalItems").notNull(),
    total_amt: real("total_Amt").notNull(),
    }
);
