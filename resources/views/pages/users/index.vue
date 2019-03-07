<template>
  <div id="table-demo">
    <template>
      <vx-card title="Users">

        <vs-table pagination max-items="3" search :data="users">

          <template slot="thead">
            <vs-th sort-key="image"></vs-th>
            <vs-th sort-key="name">Name</vs-th>
            <vs-th sort-key="email">Email</vs-th>
            <vs-th sort-key="status">Status</vs-th>
            <vs-th sort-key="roles">Role</vs-th>
          </template>

          <template slot-scope="{data}">
            <vs-tr
                  :state="val.status == 2  ? 'warning':val.status == 0 ? 'danger':null"
                  :data="val" :key="indextr"
                  v-for="(val, indextr) in data"
            >
              <vs-td :data="val.image">
                <vs-avatar size="45px" :src="val.image"/>
              </vs-td>
              <vs-td :data="val.name">
                {{val.firstname}} {{val.lastname}}
              </vs-td>
              <vs-td :data="val.email">
                {{val.email}}
              </vs-td>
              <vs-td :data="val.status">
                <!--{{val.status}}--> active
              </vs-td>
              <vs-td :data="val.roles">
                <vs-chip color="primary" :data="role" :key="roleIndex" v-for="(role, roleIndex) in data[indextr].roles">
                  {{role.name}}
                </vs-chip>
              </vs-td>
              <vs-td :data="val.roles">
                <div class="pointer-events-auto flex">
                  <vs-button @click="openDialog(val)" color="success" type="border" icon-pack="feather" size="small"
                             icon="icon-edit-2" class="m-1"></vs-button>
                  <vs-button color="danger" type="border" size="small" icon="delete_sweep" class="m-1"></vs-button>
                </div>
              </vs-td>
            </vs-tr>
          </template>
        </vs-table>
      </vx-card>
    </template>

    <vs-prompt
          @vs-cancel="restTemp"
          @vs-accept="editDate"
          @vs-close="close"
          :vs-is-valid="validName"
          :vs-active.sync="dialog">
      <div class="con-exemple-prompt">
        Enter your first and last name to <b>continue</b>.
        <vs-input placeholder="Name" v-model="temp.firstname" class="mt-4 mb-2 w-full"/>
        <vs-input placeholder="Last Name" v-model="temp.lastname" class="mt-4 mb-2 w-full"/>
        <vs-input placeholder="Email" v-model="temp.email" class="mt-4 mb-2 w-full"/>
        <vs-input placeholder="Status" v-model="temp.status" class="mt-4 mb-2 w-full"/>
        <vs-input placeholder="Password" type="password" v-model="temp.password" class="mt-4 mb-2 w-full"/>

        <span class="mt-1 font-bold">Roles</span>
        <ul class="demo-alignment">
          <li :data="role" :key="role.id"
               v-for="role in roles">
            <vs-checkbox color="success" v-model="temp.roles" :vs-value="role.id">{{role.name}}</vs-checkbox>
          </li>
        </ul>
        <span>Checked names: {{ temp.roles }}</span>
        <!--<vs-alert :vs-active="!validName" color="danger" vs-icon="new_releases">
          Fields can not be empty please enter the data
        </vs-alert>-->
      </div>
    </vs-prompt>
  </div>


</template>

<script>
  import {getUsers, updateUser, getRole} from '../../../api/users'

  export default {
    data() {
      return {
        'tableList': [
          'vs-th: Component',
          'vs-tr: Component',
          'vs-td: Component',
          'thread: Slot',
          'tbody: Slot',
          'header: Slot'
        ],
        users: [],
        dialog: false,
        dialogStatus: '',
        temp: {
          firstname: '',
          lastname: '',
          email: '',
          status: null,
          roles: []
        },
        roles: []
      }
    },
    computed: {
      validName() {
        return (
          this.temp.firstname.length > 0 &&
          this.temp.email.length > 0)
      }
    },
    mounted() {
      this.usersGet()
      this.getRoles()
    },
    methods: {
      getRoles() {
        getRole().then(response => {
          this.roles = response.data
        })
      },
      usersGet() {
        getUsers().then(response => {
          this.users = response.data.data
        })
      },
      restTemp() {
        this.temp = {
          firstname: '',
          lastname: '',
          email: '',
          id: undefined,
          status: null,
          roles: Array,
          password: null
        }
      },
      checkRole(data) {
        console.log(this.temp.roles)
//        this.temp.roles.push(data.id)
      },
      openDialog(row) {
        this.restTemp()
        this.temp = Object.assign({}, row) // copy obj

        if(this.temp.roles.length) {
          for(var val of this.temp.roles) {
            var r = []

            r.push(val.id)
            this.temp.roles = r
          }
        }
        this.dialog = true
        this.dialogStatus = 'update'
      },
      editDate() {
        updateUser(this.temp, this.temp.id).then(response => {
          this.acceptAlert()
        })
      },

      // dialogs info notify
      acceptAlert() {
        this.$vs.notify({
          color: 'success',
          title: 'Accept Selected',
          text: 'Lorem ipsum dolor sit amet, consectetur'
        })
      },
      close() {
        this.$vs.notify({
          color: 'danger',
          title: 'Closed',
          text: 'You close a dialog!'
        })
      },
    }
  }
</script>