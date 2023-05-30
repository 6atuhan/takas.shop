import { createStore } from "vuex";    
const store = createStore({                                                                                 
        state: () =>({}),                                            
        getters: {},                                                 
        mutations: {
            logla(){
                console.log('selam :>> ');
            }
        },                                               
        actions:{}                                                   
                                                                        
  }); 
  export default store;                                           