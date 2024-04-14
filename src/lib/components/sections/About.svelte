<script lang="ts">
  import { linkedInLink } from '$lib/api/socials';
  import type { ButtonColorVariant } from '$lib/components/colors';

  import Button from '$lib/components/buttons/Button.svelte';
  import MarqueeText from '$lib/components/widgets/MarqueeText.svelte';
  import Wrappper from '$lib/components/widgets/Wrappper.svelte';

  import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
  import Saos from 'saos';
  import Fa from 'svelte-fa';

  const primaryButton: ButtonColorVariant = { key: 'primary' };
</script>

<section class="w-full relative pt-20">
  <div
    class="absolute left-0 right-0 top-0 bg-primary h-12 md:h-14 lg:h-16 border-slate-900 dark:border-slate-700 border-y-4 flex items-center"
  >

  </div>
  <Wrappper>
    <div class="w-full pb-20">
      <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once />
      <div class="w-full flex flex-col gap-4 md:flex-row md:justify-between h-max">
        <div class="w-full">
          <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
            <h1 class="my-4 md:my-6 lg:my-8 dark:text-white duration-500" id="about">About Me</h1>
            <p class="dark:text-slate-300">
              I am a proactive and results-driven Software Engineer with a strong background in full-stack development. 
            My experience includes optimizing systems, enhancing performance, and leading projects in React, JavaScript, Node.js, and MongoDB. 
            I hold a Master's degree in Computer Science from the University of Florida, specializing in advanced data structures and distributed systems. 
            I am passionate about leveraging technology to solve complex problems and thrive in collaborative, innovative environments.
            </p>
            <p class="my-6 dark:text-slate-300">
              Feel free to visit my LinkedIn profile:
            </p>
            <a href={linkedInLink} target="_blank">
              <Button variant={primaryButton} noDarkVariant={false}>
                <Fa icon={faExternalLink} slot="icon" />Visit LinkedIn
              </Button>
            </a>
          </Saos>
          
        </div>
        <div class="w-full">
          <!-- TODO add my photo -->
          <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once />
        </div>
      </div>
    </div>
  </Wrappper>
</section>
