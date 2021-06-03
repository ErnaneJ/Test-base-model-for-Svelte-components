<script>
	let message = 'Hello';
</script>
<div>{message}</div>
<input id="message" type="text" bind:value={message}><br>
<button on:click={() => message='bye'}>Say bye</button>