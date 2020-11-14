<template>
<div>
    <div class="Input-Container">
      <input v-model="Firstname" type="text" placeholder="firstname" v-if="!SignMode"/>
      <input v-model="Lastname" type="text" placeholder="lastname" v-if="!SignMode"/>
      <input v-model="Email" type="Email" placeholder="Email" />
      <input v-model="Password" type="password" placeholder="Password" />
     <ButtonGroup :Text2Action="SignMode ? 'SignUp' : 'SignIn'" :Action2="ChangeMode" :TextAction="SignMode ? 'SignIn' : 'SignUp'" :Action="Submit"/>
    </div>
     <ErrorText :Text="errorText" :errorVisible="errorVisible"/>
</div>
</template>

<script>
import ErrorText from "@/components/Log/SignComponent/ErrorText";
import ButtonGroup from "@/components/Log/SignComponent/ButtonGroup";
import Sign from "@/mixins/Sign.js";
export default {
  name: "SigninForm",
  components: {
    ErrorText,
    ButtonGroup
  },
  mixins: [Sign],
};
</script>

<style lang="scss" scoped>
.Input-Container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  position: absolute;
  align-items: center;
}

input {
  margin: 5vh 0;
  background: transparent;
  border: 0;
  border-bottom: 1px solid white;
  color: white;
  font-size: 16px;
  width: 25vw;
}
input:focus {
  outline: none;
}
@media only screen and (max-width: 906px) {
  input {
 width: 80%;
  }
}
</style>
