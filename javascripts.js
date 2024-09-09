window.addEventListener('load', () => { // Run when the window loads

    const clanguage = document.querySelector('.c-language');

    fetch('database/C-Projects.json')
        .then(response => response.json())
        .then(data => {
            let postHtml = '';

            data.posts.forEach(post => {
                postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="${post.link}"><button>Read More</button></a>
                </div>
              </div>
            </div>
          `;
            });

            clanguage.innerHTML = postHtml;
        })

    const html_css_js = document.querySelector('.html-css-js');

    fetch('database/Html-CSS-JS-Projects.json')
        .then(response => response.json())
        .then(data => {
            let postHtml = '';

            data.posts.forEach(post => {
                postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="${post.link}"><button>Read More</button></a>
                </div>
              </div>
            </div>
          `;
            });

            html_css_js.innerHTML = postHtml;
        })

    const c_plus_plus_language = document.querySelector('.c-plus-plus-language');

    fetch('database/C-Plus-Plus-Projects.json')
        .then(response => response.json())
        .then(data => {
            let postHtml = '';

            data.posts.forEach(post => {
                postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="${post.link}"><button>Read More</button></a>
                </div>
              </div>
            </div>
          `;
            });

            c_plus_plus_language.innerHTML = postHtml;
        })

    const java_language = document.querySelector('.java-language');

    fetch('database/Java-Projects.json')
        .then(response => response.json())
        .then(data => {
            let postHtml = '';

            data.posts.forEach(post => {
                postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="${post.link}"><button>Read More</button></a>
                </div>
              </div>
            </div>
          `;
            });

            java_language.innerHTML = postHtml;
        })

    const python_language = document.querySelector('.python-language');

    fetch('database/Python-Projects.json')
        .then(response => response.json())
        .then(data => {
            let postHtml = '';

            data.posts.forEach(post => {
                postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="${post.link}"><button>Read More</button></a>
                </div>
              </div>
            </div>
          `;
            });

            python_language.innerHTML = postHtml;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});