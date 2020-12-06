# Bir komponentte form submit edip page de karşılamalk.

- Mesela yeni bir post oluşturulacak olan sayfada bir adet post oluşturma formu oluşturulur.
- Daha sonra bu component içindeki form prevent olarak bir method ile post edildiğinde emit edilir.
- new-post.vue içerisinde emit ile işlem geldiğinde kayıt yapılır.

**components/PostForm.vue**
```html
<template>
    <form @click.prevent="submit">
        <input type="text" v-model="post.title">
        <input type="text" v-model="post.author">
    </form>
</template>

<script>
    export default {
        data(){ return {
            post: {
                title:  '',
                author: ''
            }
        } },

        methods: {
            submit(){
                this.$emit("submit", this.post);
            }
        }
    }
</script>
```


**pages/posts/new-post.vue**
````html
<template>
    <PostForm @submit="savePost($event)"></PostForm>
</template>
<script>
import PostForm from "@/components/PostForm";
export default {
    components: {
        PostForm
    },

    methods: {
        savePost(post){
            // Kayıt işlemleri
        }
    }
}
</script>
```
