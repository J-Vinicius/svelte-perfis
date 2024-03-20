<script lang="ts">
  import { InfoCircleSolid, SearchOutline } from "flowbite-svelte-icons";
  import { Alert, Button, Search } from "flowbite-svelte";
  import { createEventDispatcher } from "svelte";
  import type IUsuario from "../interfaces/IUsuario";
  import { buscaRepositorios, buscaUsuario } from "../requisicoes";
  import montaUsuario from "../utils/montaUsuario";

  let valorInput = "j-vinicius";
  let statusDeErro: null | number = null;

  const dispatch = createEventDispatcher<{
    aoAlterarUsuario: IUsuario | null;
  }>();

  async function aoSubmeter() {
    const respUsuario = await buscaUsuario(valorInput);
    const respRepositorios = await buscaRepositorios(valorInput);

    if (respUsuario.ok && respRepositorios.ok) {
      const dadosUsuario = await respUsuario.json();
      const dadosRepositorios = await respRepositorios.json();
      console.log(dadosUsuario);
      

      dispatch(
        "aoAlterarUsuario",
        montaUsuario(dadosUsuario, dadosRepositorios)
      );
      statusDeErro = null;
    } else {
      statusDeErro = respUsuario.status;
      dispatch("aoAlterarUsuario", null);
    }
  }
</script>

<form class="flex gap-2" on:submit|preventDefault={aoSubmeter}>
  <Search
    size="md"
    placeholder="Pesquise aqui o usuário do github"
    bind:value={valorInput}
  />
  <Button type="submit" class="!p-2.5">
    <SearchOutline class="w-5 h-5" />
  </Button>
</form>
{#if statusDeErro === 404}
  <Alert color="yellow" border={true}>
    <InfoCircleSolid slot="icon" class="w-4 h-4" />
    <span class="font-medium">Alerta!</span>
    Usuário não encontrado!
  </Alert>
{/if}
