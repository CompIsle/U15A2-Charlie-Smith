<script>
    import Nav from "$lib/components/Nav.svelte";
</script>

<div class="container">
    <div class="Nav">
        <Nav/> 
    </div>
    <div class="Page">
        <slot/>
    </div>
</div>

<style>
    .container{
        display: grid;
        grid-template-columns: 3vw 94vw 3vw;
        grid-template-rows: auto 2em auto;
        background-color: #BFCFFF;
        font: 1dvw 'Roboto', Arial, sans-serif;
        color: #000000;
    }
    .Nav{
        grid-column: 1/4;
        grid-row: 1;
        z-index: 9999;
    }
    .Page{
        grid-column: 2/3;
        grid-row: 3;
        border: .1em solid #000000;
        border-radius: 1em;
        box-shadow: 0em 0em 1em .5em rgba(0,0,0,0.1);
    }

    @media only screen and (max-width: 800px) {
        .Page{
            grid-column: 1/4;
        }
        .container{
            font-size: .8em;
        }
        body{
            font-size: 1.5dvw;
        }
    }
    @media only screen and (max-width: 500px) {
        .Page{
            grid-column: 1/4;
        }
        body{
            font-size: 2dvw;
        }
    }
</style>