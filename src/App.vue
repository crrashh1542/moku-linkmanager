<script lang="ts">
import { reactive, toRefs } from 'vue'
import axios from 'axios'

export default {
    name: 'MokuMain',
    setup() {
        // STEP1 ---- 初始化
        let data = reactive({
            sites: [{
                link: '',
                avatar: '',
                name: '',
                intro: ''
            }],
            version: '',
        })

        // STEP2 ---- 获取数据
        axios.get('https://blog.crrashh.com/wp-content/plugins/moku-linkmanager/api/getLinks.php')
            .then(response => {
                console.log(response.data)
                data.sites = response.data.sites
                data.version = response.data.pluginVersion
            })
            .catch(error => console.log(error))
        
        // STEP3 ---- 将数据返回data
        return { ...toRefs(data) }
    }
}
</script>

<template>
    <ul class="container">
        <a v-for="(s, index) in sites" :key="index" :href="s.link" target="_blank" class="node">
            <div class="mdui-card mdui-ripple mdui-hoverable">
                <div class="mdui-card-header">
                    <img class="mdui-card-header-avatar" :src="s.avatar">
                    <div class="mdui-card-header-title">{{ s.name }}</div>
                    <div class="mdui-card-header-subtitle">{{ s.intro }}
                    </div>
                </div>
            </div>
        </a>
    </ul>
    <div class="info">
        Powered by
        <a href="https://github.com/crrashh1542/moku-linkmanager" target="_blank">Moku</a>
        v{{version}}
    </div>
</template>

<style scoped>
a::before {
    display: none;
}

.container {
    width: 100%;
    margin: 0;
    padding: 0;
    max-width: 100%;
}

.node {
    text-decoration: none;
    position: relative;
    width: var(--card-width);
    display: inline-block;
}

.mdui-card {
    margin: 0 8px 5px 0;
}

.mdui-card-header {
    height: 92px;
    padding: 12px 12px 16px;
}

.mdui-card-header-avatar {
    height: 64px;
    width: 64px;
}

.mdui-card-header-title {
    margin-left: 78px;
    font-size: 17px;
    line-height: 26px;
}

.mdui-card-header-subtitle {
    margin-left: 78px;
    white-space: normal !important;
}

.info {
    font-size: 12px;
    text-align: right;
    letter-spacing: .07em
}

.info a {
    text-decoration: none;
    color: #ffa726 !important
}

.info a:hover {
    text-decoration: none;
    color: #ff7243 !important
}

.info a:visited {
    text-decoration: none;
    color: #ffa726 !important
}

/* 1024px+ */
@media screen and (min-width: 1024px) {
    .node { --card-width: 48%; }
}
/* 1024px- */
@media screen and (max-width: 1024px) {
    .node { --card-width: 98%; }
}
</style>
