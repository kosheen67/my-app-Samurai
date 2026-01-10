let rerenderEntireTree = () => {
    console.log('1');
}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likesCount: 12 },
            { id: 2, message: "It's my first post", likesCount: 11 },
            { id: 3, message: "It's my first post", likesCount: 11 },
            { id: 4, message: "It's my first post", likesCount: 11 },
        ],
        newPostText: 'it-kamasutra.com'

    },

    dialogsPage: {
        dialogs: [
            { id: 1, name: 'Dima' },
            { id: 2, name: 'Andrej' },
            { id: 3, name: 'Sveta' },
            { id: 4, name: 'Sasha' },
            { id: 5, name: 'Viktor' },
            { id: 6, name: 'Valera' },
        ],
        messages: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'How are you?' },
            { id: 3, message: 'Yo' },
            { id: 4, message: 'Yo' },
            { id: 5, message: 'Yo' }
        ],
    }
}

let addPost = () => {
    let newPost = {
        id: 5, message: state.profilePage.newPostText, likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}


let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

let subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export { addPost, updateNewPostText, subscribe };
export default state;