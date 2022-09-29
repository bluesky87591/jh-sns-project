<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import firebase from "./firebase";

console.log("fire base ? : ");
console.log(firebase);
console.log("firebase");

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>
