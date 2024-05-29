<script lang="ts">
	export let url: string = "#";
	export let title: string = "Button";
</script>

<a
	href={`${url}`}
	class="uppercase tracking-wide content-bold hover:tracking-widest w-fit cursor-pointer hover:text-white my-10 p-3 px-12"
>
	<span>
		{title}
	</span><i></i>
</a>

<style>
	a {
		position: relative;
		background: #99f6e4;
		transition: 0.5s;
		border-radius: 10px;
	}
	a:hover {
		background: #99f6e4;
		box-shadow: 0 0 25px #99f6e4;
		border-radius: 10px;
	}
	a:before {
		content: " ";
		position: absolute;
		inset: 2px;
		background: #010319;
		border-radius: 10px;
	}

	a span {
		position: relative;
		z-index: 1;
	}

	a i {
		position: absolute;
		inset: 0;
		display: block;
	}
	a i::before {
		content: " ";
		position: absolute;
		top: 0;
		left: 80%;
		width: 10px;
		height: 4px;
		background: #010319;
		transform: translateX(-50%) skew(325deg);
		transition: 0.5s;
	}

	a:hover i::before {
		width: 20px;
		left: 20%;
	}

	a i::after {
		content: " ";
		position: absolute;
		bottom: 0;
		left: 20%;
		width: 10px;
		height: 4px;
		background: #010319;
		transform: translateX(-50%) skew(325deg);
		transition: 0.5s;
	}

	a:hover i::after {
		width: 20px;
		left: 80%;
	}
</style>
