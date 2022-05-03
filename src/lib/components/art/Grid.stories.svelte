<script>
    import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
    import Grid from "./Grid.svelte";
</script>

<Meta title="Art/Grid"
      component={Grid}
      argTypes={{}}
/>

<Template let:args>
    <Grid {...args}/>
</Template>

<Story name="Primary"
       args={{}}
/>
