<template>
  <div class="mainFooter">
    <footer>
      <hr />
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="https://github.com/BuketBurcu">
                  <Icon
                    icon="codicon:github-inverted"
                    width="3em"
                    height="3em"
                  ></Icon>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="mailto:zeze.36ze@gmail.com">
                  <Icon
                    icon="logos:google-gmail"
                    width="3em"
                    height="3em"
                  ></Icon>
                </a>
              </li>
              <li class="list-inline-item">
                <a href="https://medium.com/@zeze-36ze">
                 <Icon icon="ant-design:medium-workmark-outlined" width="3em" height="3em"></Icon>
                </a>
              </li>
            </ul>
            <p class="copyright text-muted">Copyright © Start Bootstrap 2021</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { Icon } from "@iconify/vue";

export default {
  components: {
    Icon,
  },
};
</script>

<style scoped>
.mainFooter {
  background-color: rosybrown;
  min-height: 80px;
 
}
.icon {
  height: 50px;
  weight: 50px;
}
</style>
