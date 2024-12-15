<template>
  <div>
   <router-view :key="$route.fullPath">
    </router-view>
  </div>
</template>

<style lang="scss">
html,body{
  height: 100%!important;
  
}
body{
  background-color: #f7f7f7;
}
*{
  margin: 0;
  padding:0;
  list-style:none;
  outline:none;
  text-decoration: none;
}
.flex{
  display:flex;
}
.j-c{
  justify-content:center;
}
.j-s{
  justify-content:space-between;
}
.a-c{
  align-items:center;
}
</style>
