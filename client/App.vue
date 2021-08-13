<template>
    <main>
        <div id="nav">
            <router-link :to="{ name: 'Home' }">Home</router-link> |
            <router-link to="/about">About</router-link>
        </div>
        <router-view/>
    </main>
</template>