const initialState={
    products:{}

}
export default function ProductRoot(state=initialState,action){

    switch(action.type){
        case "Add_Product":
            state.products[action.payload[0]]=action.payload[1]
            return({products:state.products})

         case "DELETE_PRODUCT":
            delete state.products[action.payload[0]]   
            return({products:state.products})

            default:
                return state    

    }


}