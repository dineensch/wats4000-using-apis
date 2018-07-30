<template>
  <div class="swapi">
    <p>
      <router-link v-bind:to="{ name: 'AdjectiveFind' }">Adjective Finder</router-link>
      &bull;
      <router-link v-bind:to="{ name: 'AdjectiveRhyme' }">Adjective Rhymes</router-link>
      &bull;
      <router-link v-bind:to="{ name: 'Rhymesaurus' }">Rhyme Word Relations</router-link>
      &bull;
      <router-link v-bind:to="{ name: 'Swapi' }" class="active">Something New!</router-link>
    </p>
    
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Swapi',
  data () {
    return {
      results: null,
      errors: [],
      characters: '',
      planets: ''
    }
  },
  // Create the findWords method.
  methods: {
    findWords: function() {
      axios.get('https://swapi.co/api/', {
        params: {

        }
      })
      .then(response => {
        this.results = response.data;
      })
      .catch(error => {
        this.errors.push(error);
      });
    }
  }  
}
</script>



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swapi {
  font-size: 1.4rem;
  background-color: #333;
  color: #fff;
  padding: 60px 0;
}

input[type="text"]{
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #fff;
  width: 300px;
  font-size: 1.4rem;
  color: yellow;
  font-weight: 300;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem;
}
button{
  background: #fff;
  padding: 0.5rem;
  font-weight: 300;
  color: #333;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1, h2 {
  font-weight: normal;
}

ul.results {
  list-style-type: none;
  padding: 0;
}

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #fff;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: rgb(80, 228, 80);
  background: rgba(0,0,0,0.7);
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}

a {
  color: yellow;
  text-decoration: none;
}

a:hover {
  color: yellow;
  border-top: 1px solid yellow;
  border-bottom: 1px solid yellow;
}
.active {
  color:rgb(106, 240, 233);
  border-top: 1px solid rgb(106, 240, 233);
  border-bottom: 1px solid rgb(106, 240, 233);
}
</style>