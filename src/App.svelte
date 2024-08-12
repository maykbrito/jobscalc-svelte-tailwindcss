<script>
  import "./app.css";
  import Home from "./home/Home.svelte";
  import Profile from "./profile/Profile.svelte";
  import Project from "./project/Project.svelte";
  import { app } from "./store";
</script>

{#if $app.page == "home"}
  <Home />
{:else if $app.page == "profile"}
  <Profile />
{:else}
  <Project />
{/if}
