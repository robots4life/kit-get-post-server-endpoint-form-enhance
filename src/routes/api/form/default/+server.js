// POST
export const POST = async (event) => {
	// console.log(event);

	// Form Data from DEFAULT Form
	const formData = await event.request.formData();
	console.log('formData : ', formData);

	const message_name = formData.get('message_name');
	console.log('message_name : ', message_name);

	const message_nameJSONString = JSON.stringify({ time: Date.now(), message_name: message_name });
	console.log('message_nameJSONString : ', message_nameJSONString);

	// https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
	const options = {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	};
	return new Response(message_nameJSONString, options);
};
