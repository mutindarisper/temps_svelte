<!-- Navbar.svelte -->
<script>
    // import { Link } from 'svelte-routing';
  </script>
  
  <style>
    /* Add your styling here */
    nav {
      background-color: #7a7a7a;
      padding: 1em;
      width:100vw;
    }
  
    a {
      color: white;
      text-decoration: none;
      margin: 0 10px;
      cursor: pointer;
    }
  </style>
  
  <nav>
    <a to="/">Home</a>
    <a to="/mapview">Dashboard</a>
    <a to="/account">Account</a>
  </nav>
  