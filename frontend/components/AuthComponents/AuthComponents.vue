<template>
    <div class="page auth">
        <AppLogo class="auth__logo" />

        <div class="auth__content page__content">
            <AppH1 class="auth__h1">
                Авторизация
            </AppH1>

            <AppForm @click.prevent class="auth__form">
                <AppInput 
                    class="auth__input"
                    v-for="input in authInputs" 
                    @changeValue="(data) => changeValue(data)"
                    :item="input"
                /> 
                <AppLink
                    class="auth__link" 
                    :link="{
                        link: '/',
                        title: 'Забыли пароль?'
                    }"
                />

                <AppButton type="button" class="auth__button button_blue" @click="sendAuth">
                    Войти
                </AppButton>
            </AppForm>
        </div>
    </div>
</template>

<script setup>
    import './AuthComponents.scss';
    
    import AppLogo from '../AppLogo/AppLogo.vue';
    import AppH1 from '../AppH1/AppH1.vue';
    import AppForm from '../AppForm/AppForm.vue';
    import AppInput from '../AppInput/AppInput.vue'
    import AppButton from '../AppButton/AppButton.vue'
    import AppLink from '../AppLink/AppLink.vue'

    import { useUserStore } from '@/stores/userStore.js'
    const userStore = useUserStore()
    

    const router = useRouter()

    let authInputs = ref([
        {
            id: 0,
            title: "Логин",
            typeComponent: 'input',
            type: "text",
            placeholder: 'Example@mail.ru',
            value: '',
            objectTitle: 'login'
        },
        {
            id: 1,
            title: "Пароль",
            typeComponent: 'input',
            type: "password",
            placeholder: '',
            value: '',
            objectTitle: 'password'
        }
    ])

    let auth = ref({
        login: '',
        password: ''
    })

    // Запись данных в поля
    const changeValue = (data) => {
        auth.value[data.key] = data.value 
    }

    const sendAuth = () => {
        userStore.user.root == 'educator' ? router.push('/educator/journal') : router.push('/journal') 
    }
</script>
