<template>
  <div class="mt-4">
    <form @submit.prevent="fetchData">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group mb-3">
            <label for="sAMAccountName" class="form-label">sAMAccountName</label>
            <input
              id="sAMAccountName"
              type="text"
              class="form-control"
              placeholder="User's ID"
              autocomplete="off"
              required
              v-model="data.sAMAccountName"
            />
          </div>
          <div class="form-group mb-3">
            <label for="server">Server</label>
              <select id="server" class="form-select" required v-model="data.server">
                <option disabled value="">Select server</option>
                <option
                  v-for="(server, index) in servers"
                  v-bind:key="index"
                  v-bind:value="server"
                >
                  {{ server }}
                </option>
              </select>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group mb-3">
            <label for="accountType">Account Type</label>
            <select id="accountType" class="form-select" required v-model="data.accountType">
              <option disabled value="">Select account type</option>
              <option
                v-for="(accountType, index) in accountTypes"
                v-bind:key="index"
                v-bind:value="accountType"
              >
                {{ accountType }}
              </option>
            </select>
          </div>
          <div class="form-group mb-3">
            <label for="targetServer" class="form-label">Target server</label>
            <select id="targetServer" class="form-select" required v-model="data.targetServer">
              <option disabled value="">Select target domain</option>
              <option
                v-for="(targetServer, index) in targetServers"
                v-bind:key="index"
                v-bind:value="targetServer"
              >
                {{ targetServer }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-2">Fetch data</button>

    </form>
  </div>

  <div>
    <pre>{{data}}</pre>
  </div>

</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'FetchAccount',
  setup() {
    const store = useStore();

    const servers = ref(['Server1', 'Server2', 'Server3']);
    const accountTypes = ref(['Secondary Market', 'Global System Admim', 'Global Domain Admin']);
    const targetServers = ref(['Server1', 'Server2']);

    const data = ref({
      server: '',
      sAMAccountName: '',
      targetServer: '',
      accountType: '',
    });

    function fetchData() {
      store.dispatch('fakeFetchSecondaryAccountDetails', {
        server: data.value.server,
        sAMAccountName: data.value.sAMAccountName,
        targetServer: data.value.targetServer,
        accountType: data.value.accountType,
      });
    }

    return {
      servers, accountTypes, targetServers, data, fetchData,
    };
  },
};
</script>
