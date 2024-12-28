<template>
  <div class="container fluid">
    <div class="row">
      <div id="carouselExampleDark" class="carousel carousel-dark slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="2000">
            <header class="masthead slider1">
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <div class="overlay"></div>
              <!-- <h2>Buket's List</h2> -->
              <h3>Vue.JS Yazıları</h3>
            </header>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <header class="masthead slider2">
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <div class="overlay"></div>
              <!-- <h2>Buket's List</h2> -->
              <h3>TypeScript Yazıları</h3>
              <img />
            </header>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <header class="masthead slider3">
              <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
              <div class="overlay"></div>
              <!-- <h2>Buket's List</h2> -->
              <h3>C# Yazıları</h3>
              <img />
            </header>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <br /><br /><br />
    <div class="row posts">
      <PostCard />
    </div>
  </div>
</template>

<script>
import PostCard from "../components/PostCard.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { PostCard },
  setup() {},
});
</script>

<style>
#carouselExampleDark {
  min-height: 600px;
}
.masthead {
  background-size: cover;
  height: 600px;
  weight: 1400px;
}
.slider1 {
  background-image: url("@/assets/view.jpg");
}
.slider2 {
  background-image: url("@/assets/pink1.png");
}
.slider3 {
  background-image: url("@/assets/pink2.jpg");
}
.posts {
  display: flex;
  justify-content: center;
}
h3 {
  color: black;
  font-size: 60px;
}
h2 {
  color: black;
}
</style>
