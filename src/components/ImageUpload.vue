<template>
  <v-container class="border" style="min-width: 175px">
    <v-row>
      <v-col>
        <v-text-field
          v-model="image"
          label="Upload Image"
          type="file"
          @change="uploadImage"
        />
      </v-col>
    </v-row>
    <v-row class="mt-3">
      <v-col class="d-flex align-center justify-center" v-if="imageUrl">
        <div
          class="d-flex flex-column align-center justify-center pa-3"
          @dragover.prevent
          @drop="dropImage"
        >
          <img style="width: 100px; height: 100px;"  :src="imageUrl" alt="Image Preview" />
          <p>{{ $t('message.show_image')}}</p>
          <v-btn @click="removeImage">
            <v-icon large>mdi-close</v-icon>
          </v-btn>
        </div>
      </v-col>
      <v-col class="d-flex align-center justify-center" style="background-color: #008080;" v-else>
        <div
          class="d-flex flex-column align-center justify-center pa-3"
          @dragover.prevent
          @drop="dropImage"
        >
          <v-icon large>mdi-image-plus</v-icon>
          <p>{{ $t('message.drop_image')}}</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ImageUpload',
  data() {
    return {
      image: null,
      imageUrl: null,
    };
  },
  methods: {
    async uploadImage(event) {
      this.image = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.image);
      reader.onload = (e) => {
        this.imageUrl = e.target.result;
        this.$emit('setImage', this.imageUrl)
      };
    },
    async dropImage(event) {
      event.preventDefault();
      this.image = event.dataTransfer.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.image);
      reader.onload = (e) => {
        this.imageUrl = e.target.result;
        this.$emit('setImage', this.imageUrl)
      };
    },
    removeImage() {
     this.imageUrl = null
     
    },
  },
};
</script>

<style scoped>
.pa-3 {
  padding: 1rem !important;
}
</style>
