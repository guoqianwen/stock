<<template>
  <div>
    <div class="" ref="editor" style="text-align:left;"></div>
    <button type="button" class="btn btn-success" v-on:click="getContent">发表</button>
  </div>
</template>

<script>
  import E from 'wangeditor'

  export default {
    name: 'editor',
    data () {
      return {
        editorContent: ''
      }
    },
    methods: {
      getContent: function () {
        console.log(this.editorContent)
          this.$emit('getUserComment1', this.editorContent)
          this.editorContent=" ";
      /*  var editor1 = new E(this.$refs.editor);
        console.log(Text(editor1))
        editor1.Text*/
        //console.log(editor1.toolbarSelector.innerHTML)
       // editor1.toolbarSelector.innerHTML="";

      }
    },
    mounted() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      editor.create()
    }
  }
</script>

<style scoped>
  button{
    margin-top: 1.5rem;
  }
</style>

