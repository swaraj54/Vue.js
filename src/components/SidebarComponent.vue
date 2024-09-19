<template>
    <aside class="sidebar">
        <ul class="nav flex-column">
            <li class="nav-item">
                <router-link class="nav-link" to="/dashboard">Dashboard</router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/profile">Profile</router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/settings">Settings</router-link>
            </li>
        </ul>
    </aside>
</template>
<script>

// import VueRouter from 'vue-router';
</script>
<style>
.sidebar {
    width: 20%;
    height: calc(100vh - 70px - 100px);
    /* Adjust for navbar and footer height */
    position: fixed;
    top: 70px;
    left: 0;
    bottom: 0;
    z-index: 1;
    border: 2px solid blue;
}
</style>