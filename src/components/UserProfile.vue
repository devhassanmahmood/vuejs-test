<template>
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-9 col-lg-7 col-xl-6">
        <div class="card" style="border-radius: 15px;">
          <div class="card-body p-5">
            <v-container>
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-row class="d-flex">
                  <h2>{{ $t('message.user_profile') }}</h2>
                </v-row>
                <v-row class="d-flex justify-center set-width">
                  <v-col cols="12" sm="8" md="8" class="mt-6">
                    <v-text-field 
                      label= "First Name"
                      v-model="form.firstName"
                      :rules="firstNameRules"
                      required
                    />
                    <v-text-field 
                      label="Last Name" 
                      v-model="form.lastName" 
                      :rules="lastNameRules"
                      required
                    />
                    <v-text-field 
                      label="Email" 
                      v-model="form.email" 
                      :rules="emailRules"
                      required
                    />
                  </v-col>
                  <v-col cols="12" sm="4" md="4">
                    <ImageUpload
                      @setImage = 'setImage'
                    />
                  </v-col>
                </v-row>
                <v-row class="justify-center">
                  <v-col cols="11" sm="11" md="11">
                    <v-btn :disabled="is_valid" @click="submit" color="primary" class="float-right">Save</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-container>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ImageUpload from './ImageUpload.vue'
export default {
  name: 'UserProfile',
  components: {
    ImageUpload
  },
  data() {
    return {
      form: {
        firstName: '',
        lastName: '',
        email: '',
        image: '',
      },
      valid: false,
      firstNameRules: [
        v => !!v || 'First name is required',
      ],
      lastNameRules: [
        v => !!v || 'Last name is required',
      ],
      emailRules: [
        v => !!v || 'Email is required',
        v => /.+@.+\..+/.test(v) || 'Email must be valid',
      ],
    };
  },
  computed: {
    ...mapGetters(["user"]),
    is_valid() {
      return !(this.form.image != '' && this.valid)
    },
  },
  props: {
    msg: String
  },
  methods: {
    setImage(image){
     this.form.image = image;
    },
    submit() {
      this.$refs.form.validate();
      if (this.valid) {
        this.$store.commit('setUser', this.form)
      }
    },
  },
}
</script>
<style scoped>

@media only screen and (max-width: 1200px) {
  .set-width {
    flex-direction: column !important;
    overflow-y: auto;
  }
}
</style>
