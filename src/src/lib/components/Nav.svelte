<script>
    import logo from "$lib/assets/logo.webp"
    import { page } from '$app/stores';
</script>

<nav>
    <div class="logo">
        <img src={logo} alt="logo">
        <h1><a href="/">Hot Beans Web</a></h1>
    </div>
    <ul>
        <li>
            <a class:active = {$page.url.pathname === "/"} href="/">Home</a>
            <a class:active = {$page.url.pathname === "/AboutUs"} href="/AboutUs">About US</a>
            <a class:active = {$page.url.pathname === "/OurTeam"} href="/OurTeam">Our Team</a>
            <a class:active = {$page.url.pathname === "/JoinUs"} href="/JoinUs">Join US</a>
        </li>
    </ul>
</nav>

<style>
    nav{
        display: flex;
        height: 5em;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        background-color: #020096;
        border-bottom: .2em solid #0c0042;
    }
    h1 > a{
        list-style: none;
        text-decoration: none;
        color: #ffffff;
    }
    .logo{
        display: flex;
        align-items: center;
        height: 100%;
        padding: .5em 1em;
    }
    img{
        height: 3em;
        padding-right: 2em;
    }
    ul{
        list-style: none;
        padding-right: 2em;
    }
    li > a{
        list-style: none;
        text-decoration: none;
        color: #ffffff;
        padding: 1em 2em;
        border-radius: .5em;
    }
    li > a:hover, .active{
        background-color: #beb8fa;
        color: #000000;
    }
</style>