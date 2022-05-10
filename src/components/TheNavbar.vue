<template>
  <header>
    <div id="giphy-logo">
      <router-link class="neonTextLogo" :to="{name: 'Home'}">Giphy</router-link>
    </div>
    <nav>
      <ul>
        <li><router-link class="neonTextOptions" :to="{name: 'Home'}">Home</router-link></li>
        <li><router-link class="neonTextOptions" :to="{name: 'GiphySearch'}">Buscador de Gif</router-link></li>
      </ul>
    </nav>
  </header>
</template>
<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 60px;
    top: 0;
    left: 0;
    width: 100%;
    margin-top: 28px;
    box-sizing: border-box;
}

#giphy-logo a {
    margin-top: 20px;
    padding: 20px;
    font-size: 50px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
}

.neonTextLogo {
  color: #ffffff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #16e60b,
      0 0 21px #0cea2d,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
}

.neonTextOptions {
   color: #ffffff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #d9d60b,
      0 0 21px #cfcb07,
      0 0 42px #fffb00,
      0 0 82px #fffb00,
      0 0 92px #fffb00,
      0 0 102px #fffb00,
      0 0 151px #fffb00;
}

header ul {
    display: flex;
}

header li {
    margin-left: 20px;
}

header a {
    text-decoration: none;
    font-size: 28px;
    padding: 12px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
}

header nav a:hover {
    color: rgb(77, 77, 77);
    background-color: rgb(255, 251, 0);
    cursor: pointer;
}
</style>
