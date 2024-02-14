export const authConfig ={
    pages: {
        signIn :"/login",
    },
    provider:[],
    callbacks:{
        authorized({auth,request}){
            return false,
        }
    }
}