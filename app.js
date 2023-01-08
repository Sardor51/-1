
const app = {
    data() {
        return {
            text: '',

        }
    },
    methods:{
            color1() {
                let a= document.querySelector('.text')
                a.classList.remove('red')
                a.classList.remove('yellow') 
                a.classList.add('blue') 
                
            },
            color2() {
                let a= document.querySelector('.text')
                a.classList.remove('blue')
                a.classList.remove('red')
                a.classList.add('yellow')
            },
            color3() {
                let a= document.querySelector('.text')
                a.classList.remove('blue')
                a.classList.remove('yellow')
                a.classList.add('red')
            }
        
    }
}

Vue.createApp(app).mount('#app')