<template>
    <div class="mb-3 mt-3">
        <label for="formFile" class="form-label">Upload PKMS Report</label>
        <input class="form-control" type="file" id="formFile" @change="handleFileUpload">
    </div>
     <div class="form-check mb-3 mt-3">
        <input class="form-check-input" type="radio" id="default" value="Default" v-model="reportType">
        <label class="form-check-label" for="default">Default</label>
    </div>
    <div class="form-check mb-3 mt-3">
        <input class="form-check-input" type="radio" id="temp" value="Temp" v-model="reportType">
        <label class="form-check-label" for="one">Temp</label>
    </div>
    <div class="mb-3">
        <button class="btn btn-primary" @click="uploadFile">Upload</button>
    </div>

</template>

<script>
import { ref } from 'vue';

export default {
  name: 'FileUpload',
  setup() {
    const file = ref('');
    const reportType = ref('');

    function handleFileUpload(event) {
      // eslint-disable-next-line prefer-destructuring
      file.value = event.target.files[0];
    }

    function uploadFile() {
      const formData = new FormData();
      formData.append('file', file.value);
      formData.append('reportType', reportType.value);
      console.log(formData.get('file'));
      console.log(formData.get('reportType'));
    }
    return {
      file, reportType, handleFileUpload, uploadFile,
    };
  },
};
</script>

<style>

</style>
