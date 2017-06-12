<template>
  <div id="TalionNav">
    <header class="TalionNav">
      <div class="TalionNav-primary">
        <!-- <a href="/"><h1>豆瓣</h1></a> -->
        <router-link to="/"><h1>豆瓣</h1></router-link>
        <nav>
          <ul>
            <router-link tag='li' to='/movie'>
              <a style="color: #2384E8;">电影</a>
            </router-link>
             <router-link tag='li' to='/book'>
            	<a style="color: #9F7860;">图书</a>
            </router-link>
            <router-link tag='li' to='/status'>
              <a style="color: #E4A813;">广播</a>
            </router-link>
            <router-link tag='li' to='/group'>
              <a style="color: #2AB8CC;">小组</a>
            </router-link>
          </ul>
          <span class=""></span>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
  import style from "../../../public/css/base.css";

  export default {
    data(){
      return {}
    }
  }
</script>