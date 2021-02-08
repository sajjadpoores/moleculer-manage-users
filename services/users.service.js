"use strict";
const DbService = require("moleculer-db");
const MongoDBAdapter = require("moleculer-db-adapter-mongo");

/**
 * @typedef {import('moleculer').Context} Context Moleculer's Context
 */

module.exports = {
	name: "users",
	mixins: [DbService],
	adapter: new MongoDBAdapter("mongodb://localhost:27017/microservice_users"),
	collection: "users",
	settings: {
		idField: "_id",
		fields: ["_id", "username", "name", "password", "email"],
		entityValidator: {
			username: "string",
			name: "string",
			password: "string",
			email: "string",
		},
	},
	afterConnected() {
		this.logger.info("Connected successfully");
	},
	entityCreated(json, ctx) {
		this.logger.info("New entity created!");
	},

	entityUpdated(json, ctx) {
		// You can also access to Context
		this.logger.info(`Entity updated by '${ctx.meta.user.name}' user!`);
	},

	entityRemoved(json, ctx) {
		this.logger.info("Entity removed", json);
	},
	// Add Hooks to DB actions
	hooks: {
		after: {
			get: [
				(ctx, res) => {
					delete res.password;
					return res;
				},
			],
		},
	},
	actions: {},
};
