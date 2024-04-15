<script lang="ts">
  import type { PageData } from './$types';

  import Navbar from '$lib/components/sections/Navbar.svelte';
  import About from '$lib/components/sections/About.svelte';
  import Footer from '$lib/components/sections/Footer.svelte';
  import Hero from '$lib/components/sections/Hero.svelte';
  import Portfolio from '$lib/components/sections/Portfolio.svelte';
  import Certifications from '$lib/components/sections/Certifications.svelte';
  export let data: PageData;
</script>

<main>
  <Navbar />
  <Hero />
  <About />
  <Portfolio fetch={data.fetch} projectService={data.projectService} />
  <Certifications />
  <Footer />
</main>
