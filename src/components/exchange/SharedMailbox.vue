<template>
    <div class="mt-4">
    <form @submit.prevent="fetchData">
      <div class="row">
        <div class="col-sm-6">
          <div class="form-group mb-3">
            <label for="displayName" class="form-label">Display Name</label>
            <input
              id="displayName"
              type="text"
              class="form-control"
              placeholder="Display Name"
              autocomplete="off"
              v-model="displayName"
            />
          </div>
          <div class="form-group mb-3">
            <label for="alias" class="form-label">Alias</label>
            <input
              id="alias"
              type="text"
              class="form-control"
              placeholder="Alias"
              autocomplete="off"
              v-model="alias"
            />
          </div>
          <div class="form-group mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              id="name"
              type="text"
              class="form-control"
              placeholder="Name"
              autocomplete="off"
              v-model="name"
            />
          </div>
          <div class="form-group mb-3">
            <label for="remoteRoutingAddress" class="form-label">Remote Routing Address</label>
            <input
              id="remoteRoutingAddress"
              type="text"
              class="form-control"
              placeholder="Remote Routing Address"
              autocomplete="off"
              v-model="remoteRoutingAddress"
            />
          </div>
          <div class="form-group mb-3">
            <label for="primarySMTPAddress" class="form-label">Primary SMTP Address</label>
            <input
              id="primarySMTPAddress"
              type="text"
              class="form-control"
              placeholder="PrimarySMTPAddress"
              autocomplete="off"
              v-model="primarySMTPAddress"
            />
          </div>
          <div class="form-group mb-3">
            <label for="userPrincipalName" class="form-label">User Principal Name</label>
            <input
              id="userPrincipalName"
              type="text"
              class="form-control"
              placeholder="User Principal Name"
              autocomplete="off"
              v-model="userPrincipalName"
            />
          </div>
        </div>
        <div class="col-sm-6">
            <prism-editor class="my-editor" v-model="codeText" :highlight="highlighter" :readonly=true />
        </div>

        <div class="col-12 mt-5">
            <button class="btn btn-primary" @click="powershellInstance">Connect to VM</button>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
import { computed, ref } from 'vue';
import { PowerShell } from 'node-powershell';
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-powershell';
import 'prismjs/themes/prism-tomorrow.css';

export default {
  name: 'SharedMailbox',
  components: {
    PrismEditor,
  },
  setup() {
    const displayName = ref('');
    const alias = ref('');
    const name = ref('');

    const remoteRoutingAddress = computed(() => `${name.value}@qvc.mail.onmicrosoft.com`);
    const primarySMTPAddress = computed(() => `${name.value}@qvc.com`);
    const userPrincipalName = computed(() => `${name.value}@qvc.com`);

    const codeText = computed(() => `New-RemoteMailbox
-DisplayName "${displayName.value}"
-Alias "${alias.value}"
-Name "${name.value}"
-Shared
-OnPremisesOrganizationalUnit "qvcdev.qvc.net/Email/SharedMail"
-RemoteRoutingAddress ${remoteRoutingAddress.value}
-PrimarySMTPAddress "${primarySMTPAddress.value}"
-UserPrincipalName ${userPrincipalName.value}`);

    const powershellInstance = async () => {
      const ps = new PowerShell({
        debug: true,
        executableOptions: {
          '-ExecutionPolicy': 'Bypass',
          '-NoProfile': true,
        },
      });

      try {
        const message = '"Electron + Vue + Python test"';
        const command = `start powershell {Write-Host ${message}; Read-Host}`;
        const result = await ps.invoke(command);
        console.log(result);
      } catch (error) {
        console.error(error);
        console.log(error);
      } finally {
        await ps.dispose();
      }
    };

    function highlighter(code) {
      return highlight(code, languages.powershell);
    }

    return {
      displayName, alias, name, remoteRoutingAddress, primarySMTPAddress, userPrincipalName, highlighter, codeText, powershellInstance,
    };
  },
};
</script>

<style scoped>
.my-editor {
    background: #2d2d2d;
    color: #ccc;
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
    border-radius: 10px;
}
 .prism-editor__textarea:focus {
    outline: none;
}
 .height-300 {
    height: 300px;
}
</style>
