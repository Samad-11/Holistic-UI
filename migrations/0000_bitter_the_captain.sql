CREATE TABLE `category` (
	`categoryId` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text(48) NOT NULL,
	`description` text(256) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `customer` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text(64) NOT NULL,
	`email` text(256),
	`phoneNo` text(10) NOT NULL,
	`address` text(2048) NOT NULL
);
--> statement-breakpoint
CREATE TABLE `order` (
	`id` text PRIMARY KEY NOT NULL,
	`customerId` integer,
	`orderDate` text DEFAULT (current_timestamp) NOT NULL,
	`totalItems` integer NOT NULL,
	`total_Amt` real NOT NULL,
	FOREIGN KEY (`customerId`) REFERENCES `customer`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `order_item` (
	`itemId` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`orderId` integer,
	`productId` integer,
	`quantity` integer NOT NULL,
	`price` real NOT NULL,
	FOREIGN KEY (`orderId`) REFERENCES `order`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`productId`) REFERENCES `product`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `product` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text(64) NOT NULL,
	`description` text(256),
	`price` real NOT NULL,
	`stockLeft` integer,
	`category` text,
	FOREIGN KEY (`category`) REFERENCES `category`(`categoryId`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `name_idx` ON `category` (`name`);--> statement-breakpoint
CREATE INDEX `name_idx` ON `customer` (`name`);--> statement-breakpoint
CREATE INDEX `name_idx` ON `product` (`name`);