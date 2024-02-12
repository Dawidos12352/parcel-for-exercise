import throttle from "lodash.throttle";

const form = document.querySelector("form")
const email = document.querySelector("input");
const message = document.querySelector("textarea");
const button = document.querySelector("button")

const STORAGE_KEY = "feedback-form-state"


const inputHandler = (throttle(
    () => {

        const saveObj = {
            email: form.elements.email.value,
            message: form.elements.message.value
        }
    
        localStorage.setItem(STORAGE_KEY, JSON.stringify(saveObj))
    }, 500
));

const submitHandler = (e => {
    e.preventDefault();

    const {elements: {
        email,
        message,
    }} = e.currentTarget

    console.log({email: email.value, message:message.value})

    form.reset();
    localStorage.removeItem(STORAGE_KEY)
})


form.addEventListener("submit" , submitHandler)
form.addEventListener("input", inputHandler)

const load = key => {
    try{
        const serializedState = localStorage.getItem(key);
        return serializedState === null ? undefined : JSON.parse(serializedState)
     } catch(e){
        console.log("Get state error:", e.message)
    }
}

const userData = load(STORAGE_KEY)
if(userData){
    email.value = userData.email;
    message.value = userData.message
}