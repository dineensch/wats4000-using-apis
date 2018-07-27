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
    <!-- Use a submit event handler to allow the findWords method to handle this form submission. -->
    <form v-on:submit.prevent="findWords">
      <p>Find adjectives for <input type="text" v-model="phrase"> that rhyme with <input type="text" v-model="rhyme"> <button type="submit">Search</button></p>
    </form> 

    <!-- A v-if conditional to make this results list show only if there are results and if the length is greater than 0. -->
    <ul v-if="results && results.length > 0" class="results">
      <!-- A v-for loop to the li tag to loop through the items in the results. -->
      <li v-for="item in results" class="item">
        <p><strong>{{ item.word }}</strong></p>
        <p>{{ item.score }}</p>
      </li>
    </ul>

    <!-- A `v-else-if` conditional to make this message only show if there are no results returned (but we have actually attempted a request). -->
    <div v-else-if="results && results.length === 0" class="no-results">
      <h2>No Words Found!</h2>
      <p>Please adjust your search to find more words.</p>
    </div>

    <!-- A v-if conditional to make this errors list show only if there are errors and if the length is greater than 0. -->
    <ul v-if="errors.length > 0" class="errors">
      <!-- A v-for loop to the LI tag to loop through the errors. -->
      <li v-for="error in errors">
        {{ error.message }} 
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdjectiveRhyme',
  data () {
    return {
      results: null,
      errors: [],
      phrase: '',
      rhyme: ''
    }
  },
  // Create the findWords method.
  methods: {
    findWords: function() {
      // Create an axios.get statement that requests from https://api.datamuse.com/words
      axios.get('https://api.datamuse.com/words', {
        // Create the params object
        params: {
          // Set the `ml` parameter equal to `this.phrase`
          rel_jjb: this.phrase, // the given noun
          rel_rhy: this.rhyme // the word the output adjectives will rhyme with
        }
      })
      // Create a `then` clause
      .then(response => {
        // Inside the `then` clause, set `this.results` equal to `response.data`
        this.results = response.data;
      })
      // Create a `catch` clause
      .catch(error => {
        // Inside the `catch` clause, push the new `error` onto the `this.errors` array
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