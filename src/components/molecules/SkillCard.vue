<template>
    <div>
        <v-row justify="center">
            <div v-for="skill in skills" :key="skill.id">
                <v-col cols=12>
                    <v-card elevation="2" shaped max-width="500">
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
    </div>
</template>
  
<script>
export default {
    name: 'SkilCard',
    props: [
        'skills'
    ]
}
</script>
  
<style>

</style>