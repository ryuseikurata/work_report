type Text = {
	type: "plain_text";
	text: string;
	emoji: true;
};

type postButton
    = {
	type: "button";
	text: {
		type: "plain_text";
		text: "投稿";
		emoji: true;
	};
	value: "click_me_123";
    };

type AttachmentMessage = {
	attachments: [
		{
			blocks: [
				{
					type: "header";
					text: Text;
				},
				{
					type: "section";
					fields: Text[];
				},
				{
					type: "section";
					fields: [
						{
							type: "plain_text";
							text: "幸せに鬼コミット: ";
							emoji: true;
						},
						{
							type: "plain_text";
							text: "クルー に寄り添う";
							emoji: true;
						},
						{
							type: "plain_text";
							text: "圧倒的にアジャイル";
							emoji: true;
						}
					];
				},
				{
					type: "actions";
					elements: [postButton];
				}
			];
		}
	];
};
