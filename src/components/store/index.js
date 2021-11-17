import { createStore } from 'vuex';

const fakeAxiosCall = (sAMAccountName, accountType, server, targetServer) => new Promise((resolve) => {
  setTimeout(
    () => resolve({
      data: {
        sAMAccountName,
        EmployeeId: '000000',
        FirstName: 'John',
        Surname: 'Doe',
        EmailAddress: 'EmailAddress@email.com',
        Title: 'IT guy',
        Department: 'IT',
        Company: 'Vue',
        Manager: 'John Wick',
        ManagerId: ['q100000'],
        SecondaryId: 'SecondaryId',
        UpnSuffix: ['suffix1', 'suffix2'],
        EmployeeType: 'EmployeeType',
        Server: server,
        TargetServer: targetServer,
        OuPath: 'Some ou path',
        AccountType: accountType,
      },
    }),
    1500,
  );
});

const fakeAxiosCreateAccount = (secondaryAccountDetails) => new Promise((resolve) => {
  setTimeout(
    () => resolve({
      data: {
        secondaryAccountDetails,
      },
    }),
    1500,
  );
});

export default createStore({
  state: {
    secondaryAccountDetails: null,
    loading: false,
  },
  mutations: {
    updateSecondaryAccountDetails(state, secondaryAccountDetails) {
      state.secondaryAccountDetails = secondaryAccountDetails;
    },
    resetSecondaryAccountState(state) {
      state.secondaryAccountDetails = null;
    },
    updateloading(state, loading) {
      state.loading = loading;
    },
  },
  getters: {
    getSecondaryAccountDetails(state) {
      return state.secondaryAccountDetails;
    },
    loading(state) {
      return state.loading;
    },
  },
  actions: {
    fetchSecondaryAccountDetails(context, {
      server, sAMAccountName, targetServer, accountType,
    }) {
      context.commit('updateSecondaryAccountDetails', {
        sAMAccountName,
        EmployeeId: 'q000000',
        FirstName: 'John',
        Surname: 'Doe',
        EmailAddress: 'EmailAddress@email.com',
        Title: 'IT guy',
        Department: 'IT',
        Company: 'Vue',
        Manager: 'John Wick',
        ManagerId: ['q100000'],
        SecondaryId: 'SecondaryId',
        UpnSuffix: ['suffix1', 'suffix2'],
        EmployeeType: 'EmployeeType',
        Server: server,
        TargetServer: targetServer,
        OuPath: 'Some ou path',
        accountType,
      });
    },
    createSecondaryAccount(context, {
      secondaryAccountDetails,
    }) {
      console.log(`Posted ${JSON.stringify(secondaryAccountDetails, null, 4)}`);
    },
    fakeFetchSecondaryAccountDetails(
      context,
      {
        server, sAMAccountName, targetServer, accountType,
      },
    ) {
      context.commit('updateloading', true);
      fakeAxiosCall(sAMAccountName, accountType, server, targetServer).then((result) => {
        context.commit('updateSecondaryAccountDetails', result.data);
        context.commit('updateloading', false);
      });
    },
    fakeCreateAccount(context, {
      secondaryAccountDetails,
    }) {
      context.commit('updateloading', true);
      fakeAxiosCreateAccount(secondaryAccountDetails).then(() => {
        context.commit('updateloading', false);
        context.commit('resetSecondaryAccountState');
      });
    },
  },
});
