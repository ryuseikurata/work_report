import * as functions from "firebase-functions";

export const onRun = functions.pubsub
	.schedule("every 1 minutes")
	.timeZone("Asia/Tokyo")
	.onRun(() => {
		console.log("ok");
	});
