<script>
    import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
    import Navigation from "./Navigation.svelte";
</script>

<Meta title="Shared/Navigation"
      component={Navigation}
      argTypes={{}}
/>

<Template let:args>
    <Navigation {...args}/>
</Template>

<Story name="Primary"
       args={{}}
/>
