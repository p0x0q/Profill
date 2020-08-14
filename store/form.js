import { createNamespacedHelpers } from "vuex"

export const formMapper = createNamespacedHelpers("form")

export const profile = () => {
  return {
    first_name: "",
    last_name: "",
    first_name_kana: "",
    last_name_kana: "",
    isValid: false,
  }
}

export const sns = () => {
  return {
    instagram: "",
    twitter: "",
    facebook: "",
    isValid: false,
  }
}

export const company = () => {
  return {
    organization: "",
    department: "",
    post_code: "",
    zip: "",
    mail: "",
    tel: "",
    weblink: "",
    isValid: false,
  }
}

export const colors = () => {
  return {
    background_color: "#63B3ED",
    text_color: "#4A5568",
  }
}

export const state = () => {
  return {
    step1: profile(),
    step2: sns(),
    step3: company(),
    colors: colors(),
  }
}

export const getters = {
  result(state) {
    return {
      first_name: state.step1.first_name,
      last_name: state.step1.last_name,
      first_name_kana: state.step1.first_name_kana,
      last_name_kana: state.step1.last_name_kana,
      instagram: state.step2.instagram,
      twitter: state.step2.twitter,
      facebook: state.step2.facebook,
      organization: state.step3.organization,
      department: state.step3.department,
      post_code: state.step3.post_code,
      zip: state.step3.zip,
      mail: state.step3.mail,
      tel: state.step3.tel,
      weblink: state.step3.weblink,
      background_color: state.colors.background_color,
      text_color: state.colors.text_color,
    }
  },
}

export const mutations = {
  SET_PROFILE(state, data) {
    state.step1 = { ...data }
  },
  SET_SNS(state, data) {
    state.step2 = { ...data }
  },
  SET_COMPANY(state, data) {
    state.step3 = { ...data }
  },
  SET_COLORS(state, data) {
    state.colors = { ...data }
  },
}
