<script>
    import { Meta, Story, Template } from "@storybook/addon-svelte-csf";
    import Header from "./Header.svelte";
</script>

<Meta title="Shared/Header"
      component={Header}
      argTypes={{}}
/>

<Template let:args>
    <Header {...args}/>
</Template>

<Story name="Primary"
       args={{}}
/>
