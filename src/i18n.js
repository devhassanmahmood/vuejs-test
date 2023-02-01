import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    message: {
      first_name: 'First Name',
      show_image: 'or drop image here',
      drop_image: 'Drop image here',
      user_profile: 'User Profile',
    }
  },
};

export default createI18n({
  locale: 'en',
  messages
});