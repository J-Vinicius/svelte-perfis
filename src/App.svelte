<script lang="ts">
  import { DarkMode } from "flowbite-svelte";

  import alura from "./alura.jpg";

  import Titulo from "./components/Titulo.svelte";
  import Usuario from "./components/Usuario.svelte";
  import Formulario from "./components/Formulario.svelte";

  import type IUsuario from "./interfaces/IUsuario";
  let usuario: IUsuario | null = null;

  function definirUsuario(evento: CustomEvent<IUsuario | null>) {
    usuario = evento.detail;
  }
</script>

<header class="max-w-xl mx-auto flex flex-col gap-4">
  <div class="flex items-center justify-between">
    <div class="flex gap-2 h-8">
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/svelte/svelte-original.svg"
        alt="svelte logo"
        class="w-fit max-h-full"
      />
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
        alt="tailwindcss logo"
        class="w-fit max-h-full"
      />
      <img src={alura} alt="alura logo" class="w-fit max-h-full rounded" />
    </div>
    <DarkMode />
  </div>
  <Titulo />
  <Formulario on:aoAlterarUsuario={definirUsuario} />
</header>

<section class="max-w-xl mx-auto my-4">
  {#if usuario}
    <Usuario {usuario} />
  {/if}
</section>
