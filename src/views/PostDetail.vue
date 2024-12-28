<template>
  <div class="home">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12 mt-3"><NavBar /></div>
      </div>
      <br /><br />
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8 text">
          <div class="post-detail">
            <div v-html="postContent"></div>
            <br /><br />
            <button><router-link to="/">Geri Dön</router-link></button>
            <br /><br />
          </div>
        </div>
        <div class="col-2"></div>
      </div>
      <div class="row">
        <FooterBar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import NavBar from "../components/NavBar.vue";
import FooterBar from "../components/FooterBar.vue";

export default defineComponent({
  name: "PostDetail",
  components: { NavBar, FooterBar },

  setup() {
    const route = useRoute();
    const postId = route.params.id;
    const postContent = ref<string>(""); // Tüm HTML içeriği
    const postTitle = ref<string>(""); // Başlık içeriği

    const loadPostContent = async () => {
      try {
        const response = await fetch(`/posts/${postId}.html`);
        if (!response.ok) {
          throw new Error("Dosya bulunamadı");
        }
        postContent.value = await response.text();
        // HTML içeriğinden başlık çıkar
        const parser = new DOMParser();
        const doc = parser.parseFromString(postContent.value, "text/html");
        const h1Element = doc.querySelector("h1"); // İlk <h1> etiketini seç
        postTitle.value = h1Element
          ? h1Element.textContent || ""
          : "Başlık bulunamadı";
      } catch (error) {
        console.error("HTML dosyası yüklenemedi:", error);
        postContent.value = "<p>İçerik yüklenemedi</p>";
      }
    };

    onMounted(() => {
      loadPostContent();
    });

    return {
      postContent,
      postTitle,
    };
  },
});
</script>

<style>
.home {
  background-color: rgb(239, 221, 221);
}
p {
  font-size: 20px;
}
h1,
h2 {
  color: cornflowerblue;
}
</style>
