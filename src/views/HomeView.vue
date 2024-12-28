<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-3"><NavBar></NavBar></div>
      </div>
      <div class="row">
        <div class="col-12 mt-3" style="overflow-x: hidden">
          <MainPage></MainPage>
        </div>
        <div
          v-if="category"
          class="col-9 mt-3"
          style="overflow-x: hidden"
        ></div>
      </div>
      <br />
      <br />
      <br />
      <div class="row">
        <div>
          <FooterBar></FooterBar>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import MainPage from "../components/MainPage.vue";
import FooterBar from "../components/FooterBar.vue";

export default {
  name: "HomeView",
  components: { NavBar, MainPage, FooterBar },
};
</script>

<style scoped>
.home{
  background-color: rgb(239, 221, 221);
}
</style>
