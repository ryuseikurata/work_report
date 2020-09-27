import * as admin from "firebase-admin";
/*
export * as pubsub from './routes/pubsub';
*/
export * as https from './routes/https';
import { config } from "./config";


admin.initializeApp({
    /*credential: admin.credential.cert(
      JSON.parse(JSON.stringify(service_account))
    ),*/
    credential: admin.credential.cert(
      JSON.parse(JSON.stringify(config.service_account).replace(/\\\\n/g, "\\n"))
    ),
  });
