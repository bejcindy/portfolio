document.write(`
<nav>
    <ul>
        <li><a href="${getBasePath()}index.html">Home</a></li>
        <li><a href="${getBasePath()}About.html">About</a></li>
        <li><a href="javascript: void(0);">Games</a>
            <ul>
                <li class="nav-ul-text">Digital</li>
                <li><a href="${getBasePath()}Digital/The-Hilltop-Funeral.html">The Hilltop Funeral</a></li>
                <li><a href="${getBasePath()}Digital/Inkression.html">Inkression</a></li>
                <li><a href="${getBasePath()}Digital/Trick-or-Trade.html">Trick or Trade</a></li>
                <li><a href="${getBasePath()}Digital/Mr.D6-Has-A-Date.html">Mr.D6 Has A Date</a></li>
                        <li><a href="${getBasePath()}Digital/Our-Longest-Days.html">Our Longest Days</a></li>
                        <li><a href="${getBasePath()}Digital/Get-in-the-Coop.html">Get in the Coop! (AR)</a></li>                        
                        <li class="long-nav"><a href="${getBasePath()}Digital/A-Very-Very-Spooky-Welcome.html">A very VERY Spooky Welcome (VR)</a></li>                        
                        <li><a href="${getBasePath()}Digital/Hero's-Journey.html">Hero's Journey</a></li>
                        
                        <!-- COMMENTED OUT GAMES
                            <li><a href="${getBasePath()}Digital/SAEUS.html">SAEUS</a></li>
                            <li><a href="${getBasePath()}Digital/Frida-Wants-to-Play.html">Frida Wants to Play!</a></li>
                            <li><a href="${getBasePath()}Digital/Prison-Escape.html">Prison Escape</a></li>
                            <li><a href="${getBasePath()}Digital/RIP.html">R.I.P.</a></li> 
                        -->

                    <li class="nav-ul-text">Analog</li>
                        <li><a href="${getBasePath()}Physical/MONOPOLY2.html">MONOPOLY 2</a></li>
                        <li><a href="${getBasePath()}Physical/Love-is-War.html">Love is War</a></li>
                        <li><a href="${getBasePath()}Physical/Run.html">Run!</a></li>
                        <li><a href="${getBasePath()}Physical/Trash.html">Trash</a></li>
                        <li><a href="${getBasePath()}Physical/The-Carrot.html">The Carrot</a></li>
                        <li><a href="${getBasePath()}Physical/Maze.html">Maze</a></li>
            </ul>
        </li>
        <li><a href="javascript: void(0);">UI/UX</a>
                <ul>
                    <li><a href="${getBasePath()}UIUX/Hang-Out.html">Hang Out!</a></li>
                    <li><a href="${getBasePath()}UIUX/SPRAY.html">SPRAY</a></li>
                    <li><a href="${getBasePath()}UIUX/Musart.html">Musart</a></li>
                </ul>
            </li>
    </ul>
</nav>
`);

function getBasePath() {
    // Adjust based on folder depth
    return window.location.pathname.includes('/Digital/') ||
        window.location.pathname.includes('/Physical/') ||
        window.location.pathname.includes('/UIUX/') ? '../' : '';
}