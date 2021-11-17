<template>
    <ag-grid-vue style="height: 900px; width: 1000px;"
        class="ag-theme-alpine-dark"
        :columnDefs="columnDefs"
        :rowData="centrifyData"
        :defaultColDef="defaultColDef"
        :pagination="true"
        paginationAutoPageSize="true">
    </ag-grid-vue>
</template>

<script>
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine-dark.css';
import { AgGridVue } from 'ag-grid-vue3';
import { ref } from 'vue';
import data from './Centrify_Json.json';

export default {
  name: 'App',
  components: {
    AgGridVue,
  },
  setup() {
    const centrifyData = ref(data);
    console.log(centrifyData);
    return {
      columnDefs: [
        {
          field: 'Computer', sortable: true, filter: true,
        },
        {
          field: 'Source Role', sortable: true, filter: true,
        },
        {
          field: 'Assignee', sortable: true, filter: true,
        },
      ],
      defaultColDef: { width: 327 },

      centrifyData,
    };
  },
};
</script>
