<script lang="ts">
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
