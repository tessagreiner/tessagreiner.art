<script lang="ts">
  import Artwork from '../../lib/components/art/Artwork.svelte';
  import Grid from '../../lib/components/art/Grid.svelte';

  import type { PageData } from './$types';

  export let data: PageData;
</script>

<main>
    <Grid>
        {#each data.artwork.artwork as piece}
            <Artwork artwork={piece}/>
        {/each}
    </Grid>
</main>

<style>
    main {
    }
</style>
