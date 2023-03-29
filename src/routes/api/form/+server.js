// GET
export const GET = async () => {
	// https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
	const GETResponse = 'GET_Data_Response';
	console.log('GETResponse : ', GETResponse);

	const GETResponseJSONString = JSON.stringify({ time: Date.now(), body: GETResponse });
	console.log('GETResponseJSONString : ', GETResponseJSONString);

	const options = {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	};
	return new Response(GETResponseJSONString, options);
};

// POST
export const POST = async (event) => {
	// console.log(event);

	// https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
	let postData = await event.request.json();
	console.log('postData : ', postData);

	let postDataJSONString = JSON.stringify({ time: Date.now(), body: postData });
	console.log('postDataJSONString : ', postDataJSONString);

	// https://developer.mozilla.org/en-US/docs/Web/API/Response/Response
	const options = {
		status: 200,
		headers: {
			'Content-Type': 'application/json'
		}
	};
	return new Response(postDataJSONString, options);
};
