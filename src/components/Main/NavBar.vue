<template>
    <header>
        <div class="logo">
            <router-link :to="'/'" class="logo-link">
                <h1>Math</h1>
                <span>World</span>
            </router-link>
        </div>

        <div class="main-nav">
            <router-link :to="'/'" class="nav-link">
                <span>Home</span>
            </router-link>
            <router-link :to="'about'" class="nav-link">
                <span>About</span>
            </router-link>
            <router-link :to="'community'" class="nav-link">
                <span>Community</span>
            </router-link>
            <div class="action-buttons">
                <v-btn outlined color="primary" large to="signin">
                    Sign In
                </v-btn>
                <v-btn color="primary" dark large to="register">
                    Register
                </v-btn>
            </div>
        </div>
    </header>
</template>

<style scoped>
* {
    text-decoration: none;
    list-style: none;
}

header {
    position: sticky;
    background-color: #ffff;
    top: 0;
    z-index: 999;

    width: 100%;
    display: flex;
    justify-content: space-between;

    padding: 0px 5% 0px 5%;
    border-bottom: 1px solid #e0e0e0;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
}

.logo {
    display: flex;
    align-items: center;
}

.logo .logo-link {
    display: flex;
}

span {
    color: black;
}

.main-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo span {
    font-size: 2em;
}

.main-nav .nav-link {
    font-size: 1.2em;
    padding: 35px 20px 35px 20px;
    border-bottom: 3px solid white;
}

.main-nav .nav-link:hover {
    background-color: #ecf8ff;
    border-bottom: 3px solid #0091de;
}

.main-nav a.router-link-exact-active {
    background-color: #ecf8ff;
    border-bottom: 3px solid #0091de;
}

.action-buttons {
    padding-left: 10px;
    display: flex;
    column-gap: 10px;
}

.v-btn {
    text-transform: none;
}

.v-btn span {
    font-size: 1.2em;
}
</style>
