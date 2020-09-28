import * as functions from "firebase-functions";
type UrlVerificationEvent = {
	token: string;
	challenge: string;
	type: "url_verification";
};
export const on_request = functions.https.onRequest(async (req, res) => {
	const event = req.body as UrlVerificationEvent;
	res.status(200).send({ challenge: event.challenge });
});
