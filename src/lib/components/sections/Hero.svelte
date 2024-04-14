<script lang="ts">
  import type { ButtonColorVariant } from '$lib/components/colors';

  import { emailLink } from '$lib/api/socials';
  import Whatsapp from '$lib/components/graphics/social/Whatsapp.svelte';
  import Email from '$lib/components/graphics/social/Email.svelte';
  import bg from '$lib/components/graphics/hero-bg.svg';
  import Saos from 'saos';
  import Emblem from '$lib/components/graphics/Emblem.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';
  import Button from '$lib/components/buttons/Button.svelte';
  import nandini from '$lib/components/graphics/nandini.jpeg'
  import nandiniuf from '$lib/components/graphics/nandini-uf.jpeg'
  import Typewriter from 'svelte-typewriter';

  const secondaryButton: ButtonColorVariant = { key: 'secondary' };
</script>

<section>
  <!-- Background image -->
  <div
    class="h-[950px] md:h-[800px] bg-cover bg-no-repeat bg-center flex relative duration-500"
    
  >
    <div class="md:mt-16 w-full flex">
      <Wrappper>
        <div class="w-full md:flex md:gap-4 md:justify-between my-auto">
          <div class="mb-52 mt-16 md:m-0 py-2 md:py-8 lg:py-9 sm:max-md:text-center duration-500">
            <!-- Hero text -->
            <h4 id="home" class="dark:text-white duration-500">Hello, my name is</h4>
            <h1 class="mb-2 dark:text-white duration-500">
              Nandani <span class="text-inherit text-primary">Yadav</span>
            </h1>

            <!-- Typing effect -->
            <h4 class="mb-4 dark:text-white duration-500">
              <Typewriter mode={'loop'} interval={25}>
                A
                <span class="text-emerald-600 dark:text-primary">Software Engineer</span>
                <span class="text-green-600 dark:text-green-400">Full Stack Developer</span>
                <span class="text-orange-600 dark:text-orange-400"> ML / AI Enthusiast</span>
              </Typewriter>
            </h4>

            <!-- Call to action buttons -->
            <div class="flex gap-3 sm:max-md:justify-center">
              <a href="#portfolio">
                <Button noDarkVariant={false}>See projects</Button>
              </a>
              <a href={emailLink} target="_blank">
                  <Button noDarkVariant={false}>
                    <div class="w-8 h-8" slot="icon">
                      <Email />
                    </div>
                    <span>Email me</span>
                  </Button>
              </a>
            </div>
          </div>

          <!-- Emblem logo -->
          <div class="max-md:mx-auto w-max md:my-auto relative">
            <div
              class="w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 dark:text-white absolute -top-3 right-2 duration-[50ms]"
            >
            <img src={nandini} alt="nandini"/>
            </div>

        
            <div
              class="w-52 h-52 mx-auto md:w-64 md:h-64 lg:w-72 lg:h-72 text-secondary dark:text-transparent dark:stroke-[4] dark:stroke-custom-3 duration-500"
            >
              
            </div>
          </div>
        </div>
      </Wrappper>
    </div>
  </div>
</section>

<style>
  .dark:root {
    --cursor-color: #fff;
  }
</style>
