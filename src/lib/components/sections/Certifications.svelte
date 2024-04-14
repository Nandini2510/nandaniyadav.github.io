<script lang="ts">
    import { socials } from '$lib/api/socials';
    import { linkedInLink } from '$lib/api/socials';
    import Wrappper from '$lib/components/widgets/Wrappper.svelte';
    import Button from '$lib/components/buttons/Button.svelte';
    import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
    import Saos from 'saos';
    import Fa from 'svelte-fa';
  </script>
  
  <section>
    <div class="w-full mb-4 dark:bg-teal-800">
      <Wrappper>
        <div class="text-center mx-auto my-10 md:my-12 lg:my-16 w-full">
          <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
            <h1
              class="text-center mx-auto my-10 md:my-12 lg:my-16 dark:text-white duration-500"
              id="certification"
            >
              Certifications
            </h1>
          </Saos>
  
          <!-- Social buttons -->
          <div class="flex flex-wrap justify-center gap-4 lg:gap-5 xl:gap-6">
        
              <a href="https://www.coursera.org/account/accomplishments/certificate/JUU65FDCWLU5" target="_blank" class="w-full md:w-[48.5%]">
                <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/JUU65FDCWLU5" target="_blank">
                        <Button noDarkVariant={false} fullWidth={true}>
                          <Fa icon={faExternalLink} slot="icon" />Python Data Analysis
                        </Button>
                      </a>
                </Saos>
              </a>
              <a href="https://www.coursera.org/account/accomplishments/certificate/7HEHPS5XLGMH" target="_blank" class="w-full md:w-[48.5%]">
                <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/7HEHPS5XLGMH" target="_blank">
                        <Button noDarkVariant={false} fullWidth={true}>
                          <Fa icon={faExternalLink} slot="icon" />Python Data Visualization
                        </Button>
                      </a>
                </Saos>
              </a>
              <a href="https://www.coursera.org/account/accomplishments/certificate/MA9B55AM53JB" target="_blank" class="w-full md:w-[48.5%]">
                <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/MA9B55AM53JB" target="_blank">
                        <Button noDarkVariant={false} fullWidth={true}>
                          <Fa icon={faExternalLink} slot="icon" />Python Data Representations
                        </Button>
                      </a>
                </Saos>
              </a>
              <a href="https://www.coursera.org/account/accomplishments/certificate/SF3GWBAL3XCT" target="_blank" class="w-full md:w-[48.5%]">
                <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
                    <a href="https://www.coursera.org/account/accomplishments/certificate/SF3GWBAL3XCT" target="_blank">
                        <Button noDarkVariant={false} fullWidth={true}>
                          <Fa icon={faExternalLink} slot="icon" />Python Programming Essentials
                        </Button>
                      </a>
                </Saos>
              </a>
              <a href="https://www.freecodecamp.org/certification/nandini25/responsive-web-design" target="_blank" class="w-full md:w-[48.5%]">
                <Saos animation={'scale-up-center 1s cubic-bezier(0.4, 0, 0.2, 1) both'} once>
                    <a href="https://www.freecodecamp.org/certification/nandini25/responsive-web-design" target="_blank">
                        <Button noDarkVariant={false} fullWidth={true}>
                          <Fa icon={faExternalLink} slot="icon" />Responsive Web Design
                        </Button>
                      </a>
                </Saos>
              </a>

          </div>
        </div>
      </Wrappper>
    </div>
  </section>
  