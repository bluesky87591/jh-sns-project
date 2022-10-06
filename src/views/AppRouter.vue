<template>
  <div></div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { router } from "@/router";
import { useRoute } from "vue-router";
export default defineComponent({
  name: "AppRouter",
  components: {},
  setup() {
    const route = useRoute();
    const isLoggedIn = ref(false);

    onMounted(() => {
      console.log("onMounted App Router");
      console.log(route.params);
      isLoggedIn.value = route.params.isLoggedIn;

      if (isLoggedIn.value === "true") {
        router.push("/Home");
      } else {
        router.push("/Auth");
      }
    });
  },
});
</script>
