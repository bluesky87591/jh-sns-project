<template>
  <div>
    <form @submit="onSubmited">
      <input @input="onChangeEmail" type="email" placeholder="Email" required />
      <input
        @input="onChangePassWord"
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" :value="newAccount ? 'Create Account' : 'Log In'" />
    </form>
    <div>
      <button>Continue With Google</button>
      <button>Continue With Github</button>
    </div>
  </div>
</template>
<script>
import { defineComponent, onMounted, ref } from "vue";
import { authService } from "@/fbase";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";

export default defineComponent({
  name: "Auth",
  setup() {
    const authEmail = ref("");
    const authPassWord = ref("");
    const newAccount = ref(false);

    const onChangeEmail = (event) => {
      console.log(event.target.value);
      authEmail.value = event.target.value;
    };

    const onChangePassWord = (event) => {
      console.log(event.target.value);
      authPassWord.value = event.target.value;
    };

    const onSubmited = async (event) => {
      event.preventDefault();
      try {
        let data;
        if (newAccount.value) {
          //create New Account
          data = await createUserWithEmailAndPassword(
            authService,
            authEmail.value,
            authPassWord.value
          );
        } else {
          //Log In
          data = await signInWithEmailAndPassword(
            authService,
            authEmail.value,
            authPassWord.value
          );
        }
        console.log("data : ");
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    onMounted(() => {
      authEmail.value = "";
      authPassWord.value = "";
      newAccount.value = false;
    });

    return {
      authEmail,
      authPassWord,
      onSubmited,
      onChangeEmail,
      onChangePassWord,
      newAccount,
    };
  },
});
</script>
