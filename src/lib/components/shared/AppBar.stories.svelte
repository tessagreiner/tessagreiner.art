<script>
    import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
    import AppBar from "./AppBar.svelte";
</script>

<Meta title="Shared/AppBar"
      component={AppBar}
      argTypes={{}}
/>

<Template let:args>
    <AppBar {...args}/>
</Template>

<Story name="Primary"
       args={{}}
/>
