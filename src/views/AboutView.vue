<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-3"><NavBar></NavBar></div>
      </div>
      <br /><br /><br /><br />
      <div class="row main">
        <div class="col-3"></div>
        <div class="col-6 text">
          <h3>About Me</h3>
          <p>
            &nbsp;Merhaba!<br />
            &nbsp;Ben Buket. Yazılım geliştirme ile ilgileniyorum ve şu an .NET
            developer olarak kariyerime devam ediyorum. Ancak son dönemde,
            Front-End tarafında da kendimi geliştirmek için Vue.js üzerine
            yoğunlaşıyorum. Yeni teknolojileri keşfetmek ve kendimi her alanda
            geliştirmek, bu yolculukta en büyük motivasyon kaynağım.
          </p>
          <br />
          <h4>Bu Blog'ta ne var?</h4>
          <br />
          <p>
            &nbsp;Bu blogda, yazılım geliştirme üzerine paylaşımlar yapıyorum.
            C# ve Vue.js ile ilgili yazılarım burada ağırlıklı olacak, ancak
            aynı zamanda yazılım dünyasında karşılaştığım yeni konuları da
            paylaşmayı planlıyorum. Amacım, blogumu mümkün olduğunca sade ve
            anlaşılır tutarak, herkesin kolayca ulaşabileceği faydalı içerikler
            sunmak.

            <br />
            Umarım yazılarımı beğenirsiniz!
          </p>
        </div>
        <div class="col-3"></div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br />
    <div class="row">
      <div>
        <FooterBar></FooterBar>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";
export default {
  name: "AboutView",
  components: { NavBar, FooterBar },
};
</script>

<style scoped>
.home {
  background-color: rgb(239, 221, 221);
}
p {
  text-align: left;
}
.main {
  height: 39vh;
}
</style>
