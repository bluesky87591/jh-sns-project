<template>
  <div>
    <form>
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <input type="submit" value="Log In" />
    </form>
    <div>
      <button>Continue With Google</button>
      <button>Continue With Github</button>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Auth",
});
</script>
