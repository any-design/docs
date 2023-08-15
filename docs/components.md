# Components

This page contains components of AnyUI.

<A-Button>saas</A-Button>
<a-chat :messages="messages" :enable-deep-watch="true"></a-chat>

<script setup>
  import { reactive } from 'vue';

  const messages = reactive([
    { id: 1, content: 'Hello', role: 'self' },
    { id: 2, content: 'Hi', role: 'target' },
  ]);
</script>