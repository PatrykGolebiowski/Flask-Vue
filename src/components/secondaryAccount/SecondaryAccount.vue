<template>
    <div class="jumbotron d-flex align-items-center" v-if="loading">
      <div class="container text-center">
        <SpinnerLoader />
      </div>
    </div>
  <div class="col-sm-12" v-else>
    <div class="col-sm-12" v-if="!fetchedAccount">
      <h1>Secondary Account</h1>
      <FetchAccount />
    </div>
    <div v-else>
      <CreateAccount />
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import FetchAccount from './FetchAccount.vue';
import CreateAccount from './CreateAccount.vue';
import SpinnerLoader from '../shared/SpinnerLoader.vue';

export default {
  name: 'SecondaryAccount',
  components: {
    FetchAccount,
    CreateAccount,
    SpinnerLoader,
  },
  setup() {
    const store = useStore();
    const fetchFormScreen = ref(true);

    const fetchedAccount = computed(
      () => store.getters.getSecondaryAccountDetails,
    );

    const loading = computed(
      () => store.getters.loading,
    );

    return { fetchedAccount, loading, fetchFormScreen };
  },
};
</script>
