DROP INDEX IF EXISTS `name_idx`;--> statement-breakpoint
CREATE INDEX `category_idx` ON `category` (`name`);--> statement-breakpoint
CREATE INDEX `customer_idx` ON `customer` (`name`);--> statement-breakpoint
CREATE INDEX `product_idx` ON `product` (`name`);