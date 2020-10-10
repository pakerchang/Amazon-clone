const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
	// secret key
	"sk_test_51HZkaXDRyVS1dWhotO0VKx16Engz6Nvjmiya7zspslkU08YoNruYK9kAaarLPyIZ95zwigHBsPVohVKVdZomLi6x00HxX3hmnC"
);

// API

// App config
const app = express();

// API routes
app.use(cors({ origin: true }));
app.use(express.json());

app.get("/", (request, response) => response.status(200).send("Connecting"));
app.post("/payments/create", async (request, response) => {
	const total = request.query.total;

	console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

	const paymentIntent = await stripe.paymentIntents.create({
		amount: total, // subunits of the currency
		currency: "usd",
	});

	// OK - Created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

// - listen command
exports.api = functions.https.onRequest(app);

// Endpoint
// http://localhost:5001/clone-8001b/us-central1/api
