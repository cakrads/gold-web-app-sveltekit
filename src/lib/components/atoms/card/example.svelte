<script>
	import Card from './card.svelte';
	import CardTitle from './card.title.svelte';
	import CardContent from './card.content.svelte';
</script>

<Card width="sm" className="p-5">
	<CardTitle>Example Default</CardTitle>
	<CardContent>
		Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
		order.
	</CardContent>
</Card>
<br />
<Card className="p-5">
	<CardTitle>Example Full and Default</CardTitle>
	<CardContent>
		Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological
		order.
	</CardContent>
</Card>
