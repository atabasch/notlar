# Bir listede arama yapmak
```html
<section id="app">
    <input type="text" v-model="searchText">
    <ul>
        <li v-for="item in filtered">{{ item }}</li>
    </ul>
</section>

<script>
const app = new Vue({
    el:'#app',
    data: {
        items: [a,b,c,d,e,f,g],
        searchText: ''
    },
    // computed data içerisindeki değerlerin 1 tanesinde bile değişiklik varsa çalışırlar!
    computed: {
        filtered(){
            return this.items.filter( item => {
                return item.match(this.searchText);
            } )
        }
    }
});
</script>
```
