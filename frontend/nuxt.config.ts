// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@pinia/nuxt',
      ],
      vite: {
        server: {
            fs: {
                allow: ["C:/node_modules/ufo/dist", "C:/node_modules/defu/dist"]
            }
        }
      }
})
