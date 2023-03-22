<script>
  const menuItems = [
    { title: 'Home', url: '/' },
    { title: 'Job Listings', url: '/joblistings' },
  ];
</script>

<nav>
  <ul>
    {#each menuItems as item}
      <li>
        <a href={item.url}>{item.title}</a>
      </li>
    {/each}
  </ul>
</nav>

<slot></slot>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1E90FF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px 20px;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 10px;
  }

  a {
    color: #FFF;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.2s;
  }

  a:hover {
    opacity: 0.8;
  }
</style>
