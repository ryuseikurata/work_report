import * as functions from "firebase-functions";

export const on_request = functions.https.onRequest(async (req, res) => {
	res.sendStatus(200);
});
