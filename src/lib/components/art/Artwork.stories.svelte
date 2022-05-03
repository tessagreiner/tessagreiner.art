<script>
    import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
    import Artwork from "./Artwork.svelte";
</script>

<Meta title="Art/Artwork"
      component={Artwork}
      argTypes={{}}
/>

<Template let:args>
    <Artwork {...args}/>
</Template>

<Story name="Primary"
       args={{}}
/>
