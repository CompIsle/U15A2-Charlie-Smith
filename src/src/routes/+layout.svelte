<script>
    import Nav from "$lib/components/Nav.svelte";
</script>

<body class="container">
    <div class="Nav">
        <Nav/> 
    </div>
    <div class="Page">
        <slot/>
    </div>
</body>

<style>
    *{
        padding: 0;
        margin: 0;
    }
    body {
        font: 1dvw 'Roboto', Arial, sans-serif;
        color: #000000;
    }
    .container{
        display: grid;
        grid-template-columns: 3vw 94vw 3vw;
        grid-template-rows: 7em auto;
        background-color: #BFCFFF;
    }
    .Nav{
        grid-column: 1/4;
        grid-row: 1;
        z-index: 9999;
    }
    .Page{
        grid-column: 2/3;
        grid-row: 2;
        border: .1em solid #000000;
        border-radius: 1em;
        box-shadow: 0em 0em 1em .5em rgba(0,0,0,0.1);
    }

    @media only screen and (max-width: 800px) {
        .Page{
            grid-column: 1/4;
        }
        body{
            font-size: 1.5dvw;
        }
    }
</style>