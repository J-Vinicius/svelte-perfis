<script lang="ts">
  import { Card, Avatar } from "flowbite-svelte";
  import type IUsuario from "../interfaces/IUsuario";
  import { BookOutline, GithubSolid } from "flowbite-svelte-icons";

  export let usuario: IUsuario;
  $: temRepositorios = Boolean(usuario.repositorios_recentes.length);
  console.log(temRepositorios);
  
</script>

<Card padding="md" size="xl">
  <div class="flex gap-2">
    <span class="w-2 h-2 rounded-full bg-red-400" />
    <span class="w-2 h-2 rounded-full bg-yellow-400" />
    <span class="w-2 h-2 rounded-full bg-green-400" />
  </div>
  <div class="flex flex-col items-center pb-4">
    <Avatar size="lg" src={usuario.avatar} />
    {#if usuario.nome}
      <h5 class="mb-1 text-xl font-medium text-zinc-900 dark:text-white">
        {usuario.nome}
      </h5>
    {:else}
      <h5
        class="mb-1 text-xl font-medium capitalize text-zinc-900 dark:text-white"
      >
        {usuario.login}
      </h5>
    {/if}
    <a
      class="flex space-x-1 text-zinc-400 hover:text-zinc-50"
      href={usuario.perfilURL}
      target="_blank"
      rel="noopener noreferrer"
    >
      <GithubSolid />
      <span class="text-sm text-zinc-500 dark:text-zinc-400">
        {usuario.login}</span
      >
    </a>
    <div class="flex mt-2 space-x-3 rtl:space-x-reverse lg:mt-4">
      {#if usuario.bio}
        <p class="text-center">{usuario.bio}</p>
      {/if}
    </div>
    <div class="flex gap-2 mt-2 dark:text-white text-gray-800">
      <div class="flex flex-row items-center gap-1">
        <span>{usuario.seguidores}</span>
        <p class="">seguidores</p>
      </div>
      <div class="flex flex-row items-center gap-1">
        <span>{usuario.repositoriosPublicos}</span>
        <p class="">repositórios</p>
      </div>
    </div>
  </div>
  {#if temRepositorios}
    <div>
      <h2 class="dark:text-zinc-200 text-zinc-900">Repositórios Recentes</h2>
      <ul class="flex justify-center items-center gap-2 mt-2 flex-wrap">
        {#each usuario.repositorios_recentes as repositorio}
          <li
            class="px-4 py-1 dark:bg-gray-900 dark:text-gray-200 bg-gray-100 text-gray-900 rounded dark:border-none border shadow flex items-center gap-2 capitalize hover:scale-105"
          >
            <BookOutline />
            <a href={repositorio.url} target="_blank" rel="noopener noreferrer"
              >{repositorio.nome}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  {/if}
</Card>
