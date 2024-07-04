import { index, int, real, sqliteTable, text } from "drizzle-orm/sqlite-core";
import { category } from "./category";


export const product = sqliteTable("product",{
    id: int("id", {mode: "number"}).primaryKey(),
    name: text("name", {length: 64}).notNull(),
    description: text("description", {length: 256}),
    price: real("price").notNull(),
    stock: int("stockLeft", {mode: "number"}),
    category: text("category").references(() => category.id)
    },
    (example) => ({
        productIndex: index("product_idx").on(example.name)
    })
);
