<!--suppress TypeScriptUnresolvedVariable, JSUnresolvedVariable -->
<script lang="ts">
  export let artwork: any;
  $: ({ name, year, medium, dimensions, price, sold, description, image } = artwork);

  let imageError = false;
</script>

<article>
    <div></div>

    <figure>
        {#if imageError === false}
            <img src="./artwork/{year}/{image}"
                 alt="{description}"
                 on:error={() => imageError = true}
            >
        {:else}
            <p>No image</p>
        {/if}
    </figure>

    <section>
        <h1 class="name">{name}, <span class="year">{year}</span></h1>
        <p class="medium">{medium}</p>
        <p class="dimensions">{dimensions}</p>
        <p class="description">{description}</p>
    </section>
</article>

<style>
    article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        min-width: 14rem;
        max-width: 24rem;
    }

    figure {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: 100%;
        margin: 0 0 2em 0;
    }

    figure img {
        width: 100%;
    }

    section {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: start;
        align-content: start;
        gap: 0.5em;
    }

    h1 {
        font-family: 'ui-sans-serif', 'Helvetica Neue', sans-serif;
        font-size: clamp(1em, 1em, 1em);
        font-weight: 400;
        color: rgb(60, 60, 60);
        margin: 0 0;
        padding: 0;
    }

    h1 .year {
        font-weight: 200;
    }

    p {
        font-family: 'ui-sans-serif', 'Helvetica Neue', sans-serif;
        font-size: 1em;
        font-weight: 200;
        color: rgb(60, 60, 60);
        text-align: left;
        margin: 0 0;
        padding: 0;
    }
</style>
