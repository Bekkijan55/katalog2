<template>
  <vx-card>
    <vs-popup :active.sync="popupEdit">
      <div class="vx-col w-full mb-base">
        <form @submit.prevent="editProfile" enctype="multipart/form-data">
          <div class="vx-row mb-2">
            <div class="vx-col w-full">
              <vs-input
                class="w-full"
                type="text"
                label-placeholder="Firstname"
                v-model="profile.firstname"
              />
            </div>
            <div class="vx-col w-full">
              <vs-input
                class="w-full"
                type="text"
                label-placeholder="Lastname"
                v-model="profile.lastname"
              />
            </div>
            <div class="vx-col w-full">
              <vs-input
                class="w-full"
                type="text"
                label-placeholder="Email"
                v-model="profile.email"
              />
            </div>
            <div class="vx-col w-full mt-6 mb-4">
              <input type="file" @change="getPhoto">
            </div>
          </div>

          <div class="vx-row">
            <div class="vx-col w-full">
              <vs-button class="mr-3 mb-2">Submit</vs-button>
            </div>
          </div>
        </form>
      </div>
    </vs-popup>
    <vs-table :data="users" pagination max_items="7">
      <template slot="thead">
        <vs-th>Photo</vs-th>
        <vs-th>Firstname</vs-th>
        <vs-th>Lastname</vs-th>
        <vs-th>Email</vs-th>
        <!-- <vs-th>Add Profile</vs-th> -->
        <vs-th>Action</vs-th>
      </template>
      <template slot-scope="{data}">
        <vs-tr v-for="(val,index) in data" :key="index">
          <vs-td v-if="val.profile">
            <img :src="val.profile.photo" width="80" height="80">
          </vs-td>
          <vs-td v-else></vs-td>
          <vs-td>{{val.firstname}}</vs-td>
          <vs-td v-if="val.profile">{{val.profile.lastname}}</vs-td>
          <vs-td v-else></vs-td>
          <vs-td>{{val.email}}</vs-td>
          <!-- <vs-td v-if="!val.profile">
            <vs-button
              color="primary"
              size="small"
              @click="popupProfile=true"
              icon-pack="feather"
              icon="icon-user"
            >Profie</vs-button>
          </vs-td>
          <vs-td v-else></vs-td>-->
          <vs-td>
            <vs-button
              color="warning"
              size="small"
              @click="popupEdit=true"
              v-on:click="putProfile(val)"
              icon-pack="feather"
              icon="icon-edit"
            >edit</vs-button>
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </vx-card>
</template>

<script>
import { getUsers, updateProfile } from "../../../api/users";
export default {
  data() {
    return {
      users: [],
      popupEdit: false,
      profile: {
        profile_id: "",
        user_id: "",
        firstname: "",
        lastname: "",
        email: "",
        selectedImage: null
      }
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      getUsers()
        .then(res => {
          this.users = res.data.data;
        })
        .catch(err => console.log(err));
    },
    getPhoto(e) {
      var fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.onload = e => {
        this.profile.selectedImage = e.target.result;
      };
    },
    editProfile() {
      updateProfile(this.profile)
        .then(res => {
          console.log(res.data.data);
          this.popupEdit = false;
          this.fetchUsers();
        })
        .catch(err => console.log(err));
    },
    putProfile(val) {
      if (val.profile) {
        (this.profile.profile_id = val.profile.id),
          (this.profile.lastname = val.profile.lastname);
      } else {
        (this.profile.profile_id = ""), (this.profile.lastname = "");
      }
      (this.profile.firstname = val.firstname),
        (this.profile.email = val.email),
        (this.profile.user_id = val.id);
    }
  }
};
</script>

<style>
</style>
