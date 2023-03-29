<script>
	import { enhance } from '$app/forms';
	// *********************************************
	async function getData() {
		try {
			const request = await fetch('/api/form', {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json'
				}
			});
			const response = await request.json();
			console.log('response : ', response);
		} catch (error) {
			console.log(error);
		}
	}
	// *********************************************
	// *********************************************
	async function postData() {
		try {
			let postData = { key: 'POST_Data' };
			let postDataJSONString = JSON.stringify(postData);

			const request = await fetch('/api/form', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: postDataJSONString
			});
			const response = await request.json();
			console.log('response : ', response);
		} catch (error) {
			console.log(error);
		}
	}
	// *********************************************
</script>

<br />
<button on:click={() => getData()}>GET data FROM "/api/form" Server Endpoint</button>
<br /><br />
<hr />

<br />
<button on:click={() => postData()}>POST data TO "/api/form" Server Endpoint</button>
<br /><br />
<hr />

<form id="default" action="/api/form/default" method="post">
	<div>
		<p>DEFAULT FORM : data posted to "/api/form/default" Server Endpoint</p>
		<label for="form_default_name">Name</label>
		<input
			id="form_default_name"
			name="message_name"
			type="text"
			placeholder="Name Value"
			value="John"
		/>
	</div>
	<button>Submit</button>
</form>
<br /><br />
<hr />

<form id="enhance" action="/api/form/enhance" method="post" use:enhance>
	<div>
		<p>USE:ENHANCE FORM : data posted to "/api/form/enhance" Server Endpoint</p>
		<label for="form_enhance_name">Name</label>
		<input
			id="form_enhance_name"
			name="message_name"
			type="text"
			placeholder="Name Value"
			value="Jane"
		/>
	</div>
	<button>Submit</button>
</form>
<br /><br />
<hr />

<style>
	form,
	div,
	p,
	input,
	button {
		font-size: 2rem;
	}
</style>
