import * as functions from "firebase-functions";
export const config = functions.config() as {
	service_account: {
		project_id: string;
		private_key_id: string;
		private_key: string;
		client_email: string;
		client_id: string;
		auth_uri: string;
		token_uri: string;
		auth_provider_x509_cert_url: string;
		client_x509_cert_url: string;
	};
	admin: {
		database_url: string;
	};
	slack_channel: {
		me: string;
		daily_report: string;
		weekly_report: string;
	};
};
