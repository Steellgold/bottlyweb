<script>
  import { features } from "./feature/[slug]/features";
</script>

<h1 class="flex text-[#DDDDDD] font-semibold text-xl md:text-3xl justify-center mb-3 mt-5">
  <span class="flex-col">
    Improve <img src="/yellow-gold.svg" alt="Bottly" class="absolute w-24 md:w-36" />
  </span>
  &nbsp;your knowledge
</h1>

<p class="flex text-[#E6E6E6] font-normal text-sm md:text-xl justify-center items-center text-center">
  Thanks to artificial intelligence, directly on your Discord server
</p>

<section class="flex flex-col items-center mt-10">
  <div class="grid grid-cols-1 sm:grid-cols-2 px-3 justify-center items-center gap-4">
    {#each features as feature}
      <a href={features.find(f => f.slug === feature.slug) ? `/feature/${feature.slug}` : "#"} class="flex justify-center items-center">
        <div class="relative sm:w-96 sm:h-64 rounded-lg overflow-hidden shadow-2xl hover:shadow-2xl transition ease-in duration-300 group">
          <img src={feature.image} alt="cc" class="w-full h-auto rounded-lg transition ease-in duration-300 group-hover:blur" />
          
          <div class="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition ease-in duration-300">
            <h2 class="text-white text-3xl font-bold mb-2">{feature.title}</h2>
            {#if feature.description}
              <p class="text-white text-sm font-normal text-center px-2 mb-2">{feature.description}</p>
            {/if}
          </div>
        </div>
      </a>
    {/each}
  </div>
</section>