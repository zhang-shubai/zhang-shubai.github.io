var posts=["2025/07/17/Jailbreaking-is-Mostly-Simpler-Than-You-Think/","2025/07/15/hello-world/","2025/07/15/hexo基本操作/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };