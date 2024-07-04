import { sqliteTable, int, text, index} from "drizzle-orm/sqlite-core";


export const category = sqliteTable("category",{
    id: int("categoryId", { mode: "number"}).primaryKey({ autoIncrement:true}),
    name: text("name", {length: 48}).notNull(),
    description: text("description", {length: 256}).notNull(),
},
    (example) => ({
        categoryIdx: index("category_idx").on(example.name),
    })
);
