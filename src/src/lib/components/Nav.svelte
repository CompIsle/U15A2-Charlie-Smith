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
        <li><a class:active = {$page.url.pathname === "/"} href="/">Home</a></li>
        <li><a class:active = {$page.url.pathname === "/AboutUs"} href="/AboutUs">About US</a></li>
        <li><a class:active = {$page.url.pathname === "/OurTeam"} href="/OurTeam">Our Team</a></li>
        <li><a class:active = {$page.url.pathname === "/JoinUs"} href="/JoinUs">Join US</a></li>
    </ul>
</nav>

<style>
    nav{
        display: grid;
        grid-template-columns: auto auto auto;
        height: 5em;
        width: 100%;
        align-items: center;
        background-color: #001966;
        border-bottom: .2em solid #0c0042;
    }
    h1 > a{
        list-style: none;
        text-decoration: none;
        color: #ffffff;
    }
    .logo{
        grid-column: 1/2;
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
        grid-column: 3/4;
        justify-self: flex-end;
        list-style: none;
        padding-right: 2em;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    li > a{
        list-style: none;
        text-decoration: none;
        color: #ffffff;
        padding: 1em 2em;
        margin: 0 .5em;
        border-radius: .5em;
    }
    li > a:hover, .active{
        background-color: #bfcfff;
        color: #000000;
    }
    @media only screen and (max-width: 800px) {
        nav{
            height: 7em;
			font-size: 1.2em;
            grid-template-rows: 50% 50%;
		}
        ul{
            grid-column: 1/4;
            grid-row: 2;
            justify-self: auto;
            padding: 0;
        }
        li > a {
            padding: 1em 2em;
            margin: 0 .2em;
        }
    }
</style>