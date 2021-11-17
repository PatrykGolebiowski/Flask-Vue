<template>
  <div>
    <h1>Confirm Data</h1>
  </div>
  <form @submit.prevent="createAccount">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group mb-3">
            <label for="sAMAccountName" class="form-label">sAMAccountName</label>
            <input
              id="sAMAccountName"
              type="text"
              class="form-control"
              required
              readonly
              v-model="accountData.sAMAccountName"
            />
          </div>
          <div class="form-group mb-3">
            <label for="ID" class="form-label">ID</label>
            <input
              id="ID"
              type="text"
              class="form-control"
              required
              readonly
              v-model="secondaryAccountDetails.EmployeeId"
            />
          </div>
          <div class="form-group mb-3">
            <label for="FirstName" class="form-label">First name</label>
            <input
              id="FirstName"
              type="text"
              class="form-control"
              required
              readonly
              v-model="secondaryAccountDetails.FirstName"
            />
          </div>
          <div class="form-group mb-3">
            <label for="FirstName" class="form-label">Surname</label>
            <input
              id="Surname"
              type="text"
              class="form-control"
              required
              readonly
              v-model="secondaryAccountDetails.Surname"
            />
          </div>
          <div class="form-group mb-3">
            <label for="EmailAddress" class="form-label">Email address</label>
            <input
              id="EmailAddress"
              type="text"
              class="form-control"
              required
              readonly
              v-model="secondaryAccountDetails.EmailAddress"
            />
          </div>
          <div class="form-group mb-3">
            <label for="EmailAddress" class="form-label">Title</label>
            <input
              id="Title"
              type="text"
              class="form-control"
              required
              readonly
              v-model="secondaryAccountDetails.Title"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Department" class="form-label">Department</label>
            <input
              id="Department"
              type="text"
              class="form-control"
              required
              readonly
              v-model="secondaryAccountDetails.Department"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Company" class="form-label">Company</label>
            <input
              id="Company"
              type="text"
              class="form-control"
              required
              readonly
              v-model="secondaryAccountDetails.Company"
            />
          </div>
          <div class="form-group mb-3">
            <label for="Manager" class="form-label">Manager</label>
            <input
              id="Manager"
              type="text"
              class="form-control"
              required
              readonly
              v-model="secondaryAccountDetails.Manager"
            />
          </div>
          <div class="col-12">
              <label for="ManagerID" class="form-label">Manager ID</label>
              <select id="ManagerID" class="form-select" required v-model="secondaryAccountDetails.ManagerId">
                <option disabled value="">Select value</option>
                <option
                  v-for="(id, index) in accountData.ManagerId"
                  v-bind:key="index"
                  v-bind:value="id"
                >
                  {{ id }}
                </option>
              </select>
            </div>
        </div>
        <div class="col-sm-6">
          <div class="row g-3">
            <div class="col-md-6">
              <label for="SecondaryId" class="form-label">Secondary ID</label>
              <input id="SecondaryId" type="text" class="form-control" required v-model="secondaryAccountDetails.SecondaryId">
            </div>
            <div class="col-md-6">
              <label for="UpnSuffix" class="form-label">Suffix</label>
              <div class="input-group">
                <div class="input-group-text">@</div>
                <select id="UpnSuffix" class="form-select" required v-model="secondaryAccountDetails.UpnSuffix">
                <option disabled value="">Select value</option>
                <option
                  v-for="(option, index) in accountData.UpnSuffix"
                  v-bind:key="index"
                  v-bind:value="option"
                >
                  {{ option }}
                </option>
              </select>
              </div>
            </div>
            <div class="col-12">
              <label for="Password" class="form-label">Password</label>
              <div class="input-group col-12">
                <input id="Password" type="text" class="form-control" required v-model="secondaryAccountDetails.Password">
                <div class="input-group-append">
                  <button type="button" class="btn btn-outline-secondary" @click="generatePassword()">Randomize</button>
                </div>
              </div>
            </div>
            <div class="col-12">
              <label for="EmployeeType" class="form-label">Employee type</label>
              <input
                id="EmployeeType"
                type="text"
                class="form-control"
                required
                v-model="secondaryAccountDetails.EmployeeType"
              />
            </div>
            <div class="col-12">
              <label for="AdminDescription" class="form-label">Admin description</label>
              <input
                id="AdminDescription"
                type="text"
                class="form-control"
                required
                v-model="secondaryAccountDetails.AdminDescription"
              />
            </div>
            <div class="col-12">
              <label for="TargetServer" class="form-label">Target server</label>
              <input
                id="TargetServer"
                type="text"
                class="form-control"
                required
                readonly
                v-model="secondaryAccountDetails.TargetServer"
              />
            </div>
            <div class="col-12">
              <label for="OuPath" class="form-label">OU Path</label>
              <input
                id="OuPath"
                type="text"
                class="form-control"
                required
                v-model="secondaryAccountDetails.OuPath"
              />
            </div>
            <div class="col-12">
              <label for="Enable" class="form-label">Enable</label>
              <select id="Enable" class="form-select" required v-model="secondaryAccountDetails.Enable">
                <option disabled value="">Select value</option>
                <option
                  v-for="(option, index) in enable"
                  v-bind:key="index"
                  v-bind:value="option"
                >
                  {{ option }}
                </option>
              </select>
            </div>
            <div class="col-12 mt-5">
              <button type="submit" class="btn btn-primary">Create Account</button>
            </div>
          </div>
        </div>
      </div>

    </form>

    <div>
      <pre>{{secondaryAccountDetails}}</pre>
    </div>

</template>

<script>
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

export default {
  name: 'CreateAccount',
  setup() {
    const store = useStore();

    const accountData = store.getters.getSecondaryAccountDetails;
    const enable = ref(['True', 'False']);
    const azureAccount = ref(['True', 'False']);
    const upnSuffix = ref(accountData.UpnSuffix);

    const secondaryAccountDetails = ref({
      sAMAccountName: accountData.sAMAccountName,
      EmployeeId: accountData.EmployeeId,
      FirstName: accountData.FirstName,
      Surname: accountData.Surname,
      EmailAddress: accountData.EmailAddress,
      Title: accountData.Title,
      Department: accountData.Department,
      Company: accountData.Company,
      Manager: accountData.Manager,
      ManagerId: '',
      SecondaryId: accountData.SecondaryId,
      UpnSuffix: '',
      Password: '',
      EmployeeType: accountData.EmployeeType,
      AdminDescription: 'adminDescription',
      TargetServer: accountData.TargetServer,
      OuPath: accountData.OuPath,
      Enable: '',
    });

    function generatePassword() {
      let password = '';
      const characters = 'abcdefghijklmnopqrstuvwxyz';
      const uppercaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const numbers = '0123456789';
      const symbols = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      const allCharacters = characters + uppercaseCharacters + numbers + symbols + symbols;

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < 16; i++) {
        password += allCharacters.charAt(Math.floor(Math.random() * allCharacters.length));
      }

      secondaryAccountDetails.value.Password = password;
    }

    function createAccount() {
      store.dispatch('fakeCreateAccount', { secondaryAccountDetails });
    }

    onMounted(() => {
      generatePassword();
    });

    return {
      accountData, enable, azureAccount, upnSuffix, secondaryAccountDetails, generatePassword, createAccount,
    };
  },
};
</script>

<style>
</style>
