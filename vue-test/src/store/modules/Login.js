import { login,register} from "../../services/index";
const state = {
    list:"",
    arr:[]
  };
  
  const mutations = {
    pushAdd(state, payload) {
      state.list=payload;
    },zhuce(state,payload){
      state.arr=payload;
    }
  };
  const actions = {
    //添加试题
    async addData({ commit }, payload) {
      let data = await login(payload);
      console.log("res",data.data.code);
      commit("pushAdd", data.data.code);
    },
    async regist({commit},payload){
      let data=await register(payload);
      commit("zhuce",data.data);
    }
  };
  
  export default {
    namespaced: true,
    state,
    mutations,
    actions
  };