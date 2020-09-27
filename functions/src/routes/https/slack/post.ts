import * as functions from "firebase-functions";

export const onRequest = functions.https.onRequest(async (req, res) => {
	res.sendStatus(200);
});
