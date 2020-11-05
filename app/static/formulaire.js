

var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!',
        nom:"",
        prenom:"",
        mail:"",
        password:"",
        confirmPassword:"",
        nomEntreprise:"",
        activitesEntreprise:"",
        pro: false,
    },
    methods: {
        submitForm: function() {
          console.log("test");
        },
        falsePro: function() {
            this.pro = false;
        },
    }
});


/*
(async() => {
  const rawResponse = await fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({nom:"",
                          prenom:"",
                          mail:"",
                          password:"",
                          nomEntreprise:"",
                          activitesEntreprise:"",
                          pro: false})
  });
  const content = await rawResponse.json();

  console.log(content);
})();


        sendres: async() => {
          const rawResponse = await fetch('https://httpbin.org/post', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: this.Date
          });
          const content = await rawResponse.json();
        
          console.log(content);
        }

var send = {
  nom:"",
        prenom:"",
        mail:"",
        password:"",
        nomEntreprise:"",
        activitesEntreprise:"",
        pro: false
};

var data = new FormData();
data.append( "json", JSON.stringify( send ) );

fetch("/echo/json/",
{
  method: "POST",
  body: data
})
.then(function(res){ return res.json(); })
.then(function(data){ alert( JSON.stringify( data ) ) })*/


/*
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
})
var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
})
var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
})
app2.message = 'some new message'
app4.todos.push({ text: 'New item' })

<div id="app-2">
            <span v-bind:title="message">
              Hover your mouse over me for a few seconds
              to see my dynamically bound title!
            </span>
          </div>
        <div id="app-4">
          <ul>
            <li v-for="todo in todos">
              {{ todo.text }}
            </li>
          </ul>
        </div>
        <div id="app">
            <p>{{ nom }}</p>
            <button v-on:click="reverseMessage">Reverse Message</button>
        </div>
        <div id="app-6">
            <input v-model="message">
            <p>{{ message }}</p>
        </div></div>*/