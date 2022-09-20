<script lang="ts">
  throw new Error("@migration task: Add data prop (https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292707)");

  import Artwork from '../../lib/components/art/Artwork.svelte';
  import Grid from '../../lib/components/art/Grid.svelte';

  export let artwork: any[];
</script>

<main>
    <Grid>
        {#each artwork.artwork as piece}
            <Artwork artwork={piece}/>
        {/each}
    </Grid>
</main>

<style>
    main {
    }
</style>
