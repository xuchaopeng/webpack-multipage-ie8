import riot from 'riot';

<blog>
  <h1>{ title }</h1>
  <my-post each={ posts }>
    <a href={ this.parent.backToHome }>Back to home</a>
    <div onclick={ this.parent.deleteAllPosts }>Delete all the posts</div>
  </my-post>
  <script>
    this.backToHome = '/homepage'
    this.title = 'my blog title'
    this.posts = [
      { title: "post 1", description: 'my post description' },
      { title: "post 2", description: 'my post description' }
    ]
    deleteAllPosts() {
      this.posts = []
      this.update()
    }
  </script>
</blog>

<my-post>
  <h2>{ title }</h2>
  <p>{ description }</p>
  <yield/>
</my-post>
