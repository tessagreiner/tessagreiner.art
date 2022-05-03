<script lang="ts">
  import Header from './Header.svelte';
  import Navigation from './Navigation.svelte';

  export let raised = true;
</script>

<div class="app-bar {raised === true ? 'raised' : ''}">
    <Header/>

    <Navigation/>
</div>

<style>
    .app-bar {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 1em;
        padding: 2rem;
    }

    .raised {
        box-shadow: 0 2px 4px -3px;
    }

    @media (min-width: 600px) {
        .app-bar {
            flex-direction: row;
            justify-content: space-between;
            gap: 0;
            padding: 2rem 2rem;
        }
    }
</style>
