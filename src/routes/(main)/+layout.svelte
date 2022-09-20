<script>
    import AppBar from "$lib/components/shared/AppBar.svelte";
</script>

<AppBar/>

<slot></slot>

<style>
    :global(body) {
        margin: 0;
    }
</style>
