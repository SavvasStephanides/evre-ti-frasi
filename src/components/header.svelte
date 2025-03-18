<script>
    import appLogo from '$lib/app-logo.png';
    import { base } from '$app/paths'
</script>
<header>
    <h1>
        <img src={base + appLogo} alt="Έβρε τη φράση" id="app-logo">
    </h1>
</header>
<style>

    *{
        margin: 0;
    }

    header{
        padding: 9px 15px;
        display: flex;
    }

    h1{
        margin: auto;
    }

    h1 #app-logo{
        display: block;
        height: 60px;
    }
</style>

