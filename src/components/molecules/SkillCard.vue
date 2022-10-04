<template>
    <div>
        <v-container class="mt-16 mb-16">
            <v-row justify="center">
                <div v-for="skill in skills" :key="skill.id">
                    <v-col cols=12>
                        <v-card elevation="2" shaped :width="width">
                            <v-card-title>
                                {{ skill.title }}
                                <v-spacer></v-spacer>
                                <v-icon v-for="icon in skill.icon" :key="icon" x-large>
                                    {{ icon }}
                                </v-icon>
                            </v-card-title>
                            <v-card-text class="black--text text--darken-4">
                                {{ skill.description }}
                            </v-card-text>
                        </v-card>
                    </v-col>
                </div>
            </v-row>
        </v-container>
    </div>
</template>
  
<script>
export default {
    name: 'SkilCard',
    props: [
        'skills'
    ],
    computed: {
        width() {
            switch (this.$vuetify.breakpoint.name) {
                case 'xs': return 300
                default: return 500
            }
        },
    }
}
</script>
  
<style>

</style>