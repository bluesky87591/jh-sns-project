<template>
  <div id="nav">
    <router-view />
    <footer>&copy;{{ nowYear }}</footer>
  </div>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { authService, firebase } from "@/fbase";
import { router } from "@/router";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    console.log("fire base ? : ");
    console.log(firebase);
    console.log(authService.currentUser);
    const isLoggedIn = ref(authService.currentUser);
    const nowYear = new Date().getFullYear() + " JH SNS";

    onMounted(() => {
      router.push({
        name: "AppRouter",
        params: { isLoggedIn: isLoggedIn.value },
      });
    });

    return { isLoggedIn, nowYear };
  },
});
</script>
