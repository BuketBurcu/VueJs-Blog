<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-3"><NavBar /></div>
      </div>
      <br /><br /><br /><br /><br /><br />
      <div class="row main">
        <div class="col-4"></div>
        <div class="col-4">
          <h4>Contact Me</h4>
          <p>
           Eğer tavsiyeleriniz veya belirli konularda yazı istekleriniz var ise bana aşağıdaki adreslerden ulaşabilirsiniz. 
          </p>
          <ul>
            <li>
              <strong>Email: &nbsp;</strong>
              <a href="mailto:zeze.36ze@gmail.com" 
                >zeze.36ze@gmail.com</a
              >
            </li>
            <li>
              <strong>Medium:&nbsp;</strong>
              <a href="https://medium.com/@zeze-36ze"
                >https://medium.com/@zeze-36ze</a
              >
            </li>
            <li>
              <strong>GitHub Adresi:&nbsp;</strong
              ><a href="https://github.com/BuketBurcu">
                https://github.com/BuketBurcu</a
              >
            </li>
            <li>
              <strong>Linkedin:&nbsp;</strong
              ><a
                href="  https://www.linkedin.com/in/buket-burcu-mercan-8234aa96/"
              >
                https://www.linkedin.com/in/buket-burcu-mercan-8234aa96/</a
              >
            </li>
          </ul>
          <p></p>
        </div>
        <div class="col-4"></div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br />
    <div class="row">
      <FooterBar />
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
export default {
  name: "ContactView",
  components: { NavBar, FooterBar },
};
</script>

<style scoped>
.home {
  background-color: rgb(239, 221, 221);
}
li,
p,
h4 {
  text-align: left;
}
</style>
