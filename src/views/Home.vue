<template>
  <div>
    <div>Home</div>
    <button @click="goProfile">어딘가 가는 버튼</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { router } from "@/router";
export default defineComponent({
  name: "Home",
  components: {},
  setup() {
    const goProfile = () => {
      router.push("/Profile");
    };

    return { goProfile };
  },
});
</script>
