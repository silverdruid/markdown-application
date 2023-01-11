<template>
  <div class="title">MarkDown Editor</div>
  <div id="editor">
    <textarea :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown"></div>
  </div>
</template>

<script>

export default {
  el: '#editor',
  data() {
    return {
        input: "Tell me your secret",     
   }
  },
  computed: {
    compiledMarkdown() {
      return this.input
    }
  },
  methods: {
    update: function (e) {
      this.input = e.target.value
    }
  }
}
</script>

<style>
    #editor {
      margin: 0;
      height: 100%;
      font-family: "Helvetica Neue", Arial, sans-serif;
      color: #333;
    }
  
    textarea,
    #editor div {
      display: inline-block;
      width: 49%;
      height: 100%;
      vertical-align: top;
      box-sizing: border-box;
      padding: 0 20px;
    }
  
    textarea {
      border: none;
      border-right: 1px solid #ccc;
      resize: none;
      outline: none;
      background-color: #f6f6f6;
      font-size: 14px;
      font-family: "Monaco", courier, monospace;
      padding: 20px;
    }

    .title {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 32px;
      display: flex;
      align-content: center;
      justify-content: center;
      margin-bottom: 24px;
      color: #2431e0;
    }
  
    code {
      color: #f66;
    }
</style>