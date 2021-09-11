<template>
    <main>
        <div id="nav">
            <router-link :to="{ name: 'Home' }">Home</router-link> |
            <router-link to="/about">About</router-link> | 
            <router-link to="/about/sample">Sample</router-link> | 
            <router-link :to="{ name: 'Profile', params: { username: 'Gina123' } }">Profile</router-link>
        </div>
        <router-view/>
    </main>
</template>