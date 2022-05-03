<div class="grid">
    <slot></slot>
</div>

<style>
    .grid {
        display: grid;
        grid-template-columns: repeat(1, auto);
        justify-content: center;
        align-items: stretch;
        align-content: center;
        grid-gap: 4em;
        padding: 4rem;
    }

    @media (min-width: 36rem) {
        .grid {
            grid-template-columns: repeat(2, auto);
        }
    }

    @media (min-width: 52rem) {
        .grid {
            grid-template-columns: repeat(3, auto);
        }
    }
</style>
