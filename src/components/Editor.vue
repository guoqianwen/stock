<<template>
  <div>
    <div class="" ref="editor" style="text-align:left;flex-wrap: wrap!important;"></div>
    <button type="button" class="btn btn-success" v-on:click="getContent">发表</button>
  </div>
</template>

<script>
  import E from 'wangeditor'

  export default {
    name: 'editor',
    data () {
      return {
        editorContent: '',
        obj:{}
      }
    },
    methods: {
      getContent: function () {
        this.obj._clearText();
        this.$emit('getUserComment1', this.editorContent)
      }
    },
    mounted() {
      var editor = new E(this.$refs.editor)
      editor.customConfig.onchange = (html) => {
        this.editorContent = html
      }
      this.obj=editor;
      editor.create()
    }
  }
</script>

<style scoped>
  button{
    margin-top: 1.5rem;
  }
</style>

