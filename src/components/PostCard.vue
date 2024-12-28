<template>
  <div v-for="post in posts" :key="post.id" class="card">
    <img :src="`${post.image}`" class="card-img-top" alt="..." />
    <div class="card-body">
      <h4 class="card-title">{{ post.title }} Yazılarım</h4>
    </div>
    <div class="card-list">
      <ul class="list-group list-group-flush">
        <li
          v-for="postItem in post.postList"
          :key="postItem.id"
          @click="goToPost(postItem.id)"
          class="list-group-item"
        >
          <a
            href="'/post/'+ postItem.id"
            @click.prevent="goToPost(postItem.id)"
            class="card-link"
          >
            <router-link :to="'/post/' + postItem.id">{{
              postItem.postTitle
            }}</router-link></a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export interface PostCard {
  id: number;
  title: string;
  image: string;
  description: string;
  postList: PostList[];
}

export interface PostList {
  id: number;
  postTitle: string;
  address: string;
}

export default defineComponent({
  name: "PostCard",
  setup() {
    const router = useRouter();
    const posts = ref<PostCard[]>([]);
    const postList = ref<PostList[]>([]);

    //posts.json dosyasını almak için
    onMounted(async () => {
      const response = await fetch("/data/posts.json");
      const data = await response.json();
      posts.value = data;
      postList.value = data.postList;
    });

    function goToPost(id: string) {
      router.push({ name: "PostDetail", params: { id: id } });
    }

    return {
      posts,
      postList,
      goToPost,
    };
  },
});
</script>

<style scoped>
.card {
  background-color: rgb(251, 238, 238);
  height: 100%;
  width: 19rem;
}

.card-title {
  height: 30px;
  weight: 40px;
  padding-bottom: 5px;
}
img {
  padding-top: 5px;
  width: 100%;
  height: 250px;
}
.card-list {
  padding-top: 5px;
  padding-bottom: 7px;
}

</style>
