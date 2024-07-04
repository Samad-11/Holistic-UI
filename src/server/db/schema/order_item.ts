import { int, real, sqliteTable } from "drizzle-orm/sqlite-core";
import { order } from "./order";
import { product } from "./product";


export const item = sqliteTable("order_item", {
    id: int("itemId", {mode: "number"}).primaryKey({ autoIncrement: true}),
    order_id: int("orderId").references(() => order.id),
    product_id: int("productId").references(() => product.id),
    quantity: int("quantity").notNull(),
    price: real("price").notNull()
});
