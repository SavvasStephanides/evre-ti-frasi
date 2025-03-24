<script>
    import appLogo from '$lib/app-logo.png';
    import { base } from '$app/paths'
</script>
<header>
    <div class="content">
        <h1>
            <img src={base + appLogo} alt="Έβρε τη φράση" id="app-logo">
        </h1>
        <nav>
            <a href="/unpezable#contact">ΕΠΙΚΟΙΝΩΝΙΑ</a>
        </nav>
    </div>
</header>
<style>

    *{
        margin: 0;
    }

    header{
        padding: 9px 15px;
    }

    header .content{
        display: flex;
        max-width: 600px;
        margin: auto;
        position: relative;
    }

    h1{
        margin: auto;
    }

    h1 #app-logo{
        display: block;
        height: 60px;
    }

    nav{
        position: absolute;
        right: 0;
        height: 100%;
        display: flex;
        align-items: center;
    }

    nav a{
        background-color: white;
        font-weight: bold;
        color: black;
        text-decoration: none;
        padding: 6px 6px;
        font-family: sans-serif;
        border: 1px solid #eee;
        box-shadow: 0 0 15px #eee;
        border-radius: 6px;
    }
</style>

