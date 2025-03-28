<script>
    import appLogo from '$lib/app-logo.png?url'
    import feedbackIcon from '$lib/feedback.png?url'
    import { base } from '$app/paths'
</script>
<header>
    <div id="top"></div>
    <div class="content">
        <h1>
            <img src={base + appLogo} alt="Έβρε τη φράση" id="app-logo">
            <div class="beta">beta</div>
        </h1>
        <nav>
            <a href="https://savvas.me/unpezable#contact" target="_blank" aria-label="Επικοινωνία">
                <img src={base + feedbackIcon} alt="Επικοινωνία" id="feedback-icon"/>
            </a>
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

    h1 .beta{
        font-family: sans-serif;
        font-size: 15px;
        text-align: right;
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
        border: 2px solid #333;
        border-radius: 6px;
    }

    nav a:hover{
        box-shadow: 0 0 6px #333;
    }

    nav a img{
        height: 30px;
    }




</style>

