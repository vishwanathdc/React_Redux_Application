const initState = {
    posts: [
        {id: 1, title: 'a bood breeze', body:'a good breeze is all I need'},
        {id: 2, title: 'a glass of water', body:'a glass of water is all I need'},
        {id: 3, title: 'a laptop to code', body:'a laptop to code is all I need'}
    ]
}

const rootReducer = (state = initState, action) => {
    console.log(action);
    if(action.type == 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !==post.id
        });
        return {
            ...state,
            posts : newPosts
        }
    }
    return state;
}

export default rootReducer;