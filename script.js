// // call stack
// console.log("Start"); 

// // browser
// setTimeout(() => {
//     console.log("setTimeout")
// }, 0);
// // handler callback

// // call stack
// console.log("End");

// // callback queu to callstack

// setTimeout(() => {
//     console.log("Hello World")
// }, 1000);

// const id = setInterval(() => {
//     console.log("How are you?");
// }, 2000);

// setTimeout(() => clearInterval(id), 5000);


// function fetchUser(id, callback) {
//     setTimeout(() => {
//         const user = {id: id, name: "Janelle"};
//         callback(null, user);
//     }, 1000)
// }

// fetchUser(123, (error, user) => {
//     if(error) console.log(`There's been an ${error}`);
//     else console.log(`Our user is ${user.name}`);
// })


// // callback hell - why promises are useful
// getUser(id, (user) => {
//     getProfile(user.id, (profile) => {
//         getPosts(profile.posts, (commments) => {
//             getComments(commments[0], () => {
//                 console.log("grabbed comments");
//             })
//         })
//     })
// })

// // promises

// // old way promises
// function fetchUserPromise(id) {
//     // mimmick latency task
//     setTimeout(() => {
//         if(id) {
//              // handle resolve
//             resolve({id: id, name: "Corey"});
//         } else {
//             // handle reject
//             reject("no valid id was found");
//         }
//     }, 2000)
// }

// // consume the promiise
// fetchUserPromise(123)
//         .then((u) => getProfile(u.id))
//         .then((p) => getPosts(p.posts))
//         .then((c) => console.log(c[0]) )
//         .catch((e)=> console.error(e.message))

// // new way promises - async and await
// // ES 6 syntax vanilla
// async function blenderTask() {
//     try {
//         const grabBlenderUser = await fetchUserPromise(456);
//         const grabBlenderUserProfile = await getProfile(grabBlenderUser.id);
//         console.log(grabBlenderUserProfile)
//     } catch (error) {
//         console.error(error.message);
//     } finally {
//         console.log("blender task complete");
//     }
// }

// async function grabName() {
//     const user1 = await fetchUser(123);
//     const user2 = await fetchUser(124);
// } // 2 seconds

// async function grabGroupedNames(){
//     const [user1, user2] = await Promise.all([
//         fetchUser(123),
//         fetchUser(456)
//     ])
// } // in one return in 1 second 


// GET request
async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if (!response.ok) {
            throw new Error("User not found");    
        }
        const user = await response.json();
        console.log(user);
        return user;
    } catch (error) {
        console.log(error);
    }
}

getUser();

// POST request
// async function postComment(userComment) {
//     const response = await fetch(URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userComment)
//     })

//     return response.json();
// }
// const userComment = prompt();
// postComment({id: id, name: "Corey", comment: userComment})

// // API keys
// // create config file
// // add api keys in env vars
// // add config to gitigone

// const apikey = "12345667"
// export const envAPIKey = process.env.apikey;



