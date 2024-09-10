window.addEventListener('load', () => { // Run when the window loads

  const clanguage = document.querySelector('.c-language');

  fetch('database/postCards/C-Projects.json')
    .then(response => response.json())
    .then(data => {
      let postHtml = '';

      data.posts.forEach(post => {
        postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="images/postCardsImages/${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="projects-detailed.html"><button id="c-language${post.id}" class="posts-buttons" onclick="storeButtonId(this.id)">Read More</button></a>
                </div>
              </div>
            </div>
          `;
      });

      clanguage.innerHTML = postHtml;
    })

  const html_css_js = document.querySelector('.html-css-js');

  fetch('database/postCards/Html-CSS-JS-Projects.json')
    .then(response => response.json())
    .then(data => {
      let postHtml = '';

      data.posts.forEach(post => {
        postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="images/postCardsImages/${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="projects-detailed.html"><button id="html-css-js${post.id}" class="posts-buttons" onclick="storeButtonId(this.id)">Read More</button></a>
                </div>
              </div>
            </div>
          `;
      });

      html_css_js.innerHTML = postHtml;
    })

  const c_plus_plus_language = document.querySelector('.c-plus-plus-language');

  fetch('database/postCards/C-Plus-Plus-Projects.json')
    .then(response => response.json())
    .then(data => {
      let postHtml = '';

      data.posts.forEach(post => {
        postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="images/postCardsImages/${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="projects-detailed.html"><button id="c-plus-plus-language${post.id}" class="posts-buttons" onclick="storeButtonId(this.id)">Read More</button></a>
                </div>
              </div>
            </div>
          `;
      });

      c_plus_plus_language.innerHTML = postHtml;
    })

  const java_language = document.querySelector('.java-language');

  fetch('database/postCards/Java-Projects.json')
    .then(response => response.json())
    .then(data => {
      let postHtml = '';

      data.posts.forEach(post => {
        postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="images/postCardsImages/${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="projects-detailed.html"><button id="java-language${post.id}" class="posts-buttons" onclick="storeButtonId(this.id)">Read More</button></a>
                </div>
              </div>
            </div>
          `;
      });

      java_language.innerHTML = postHtml;
    })

  const python_language = document.querySelector('.python-language');

  fetch('database/postCards/Python-Projects.json')
    .then(response => response.json())
    .then(data => {
      let postHtml = '';

      data.posts.forEach(post => {
        postHtml += `
            <div class="posts">
              <div class="posts-content">
                <div class="posts-img">
                  <img src="images/postCardsImages/${post.image}" alt="">
                </div>
                <div class="posts-description">
                  ${post.description}
                </div>
                <div class="posts-read-more">
                  <a href="projects-detailed.html"><button id="python-language${post.id}" class="posts-buttons" onclick="storeButtonId(this.id)">Read More</button></a>
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

    checkWhichLanguage();


});


// TO AUTOMATE POST DETAILS  TO AUTOMATE POST DETAILS  TO AUTOMATE POST DETAILS  TO AUTOMATE POST DETAILS  TO AUTOMATE POST DETAILS  TO AUTOMATE POST DETAILS  TO AUTOMATE POST DETAILS  TO AUTOMATE POST DETAILS  TO AUTOMATE POST DETAILS  TO AUTOMATE POST DETAILS  

function storeButtonId(buttonId) {
 

  let buttonData = {
    buttonId: buttonId
  };

  let jsonData = JSON.stringify(buttonData);

  localStorage.setItem('buttonId', jsonData);


  
}



function checkWhichLanguage() {
  const buttonId = JSON.parse(localStorage.getItem('buttonId')).buttonId;

  let prefix = '';
  let jsonFile = '';
  if (buttonId.startsWith("c-language")) {
    prefix = "c-language";
    jsonFile = 'C-Projects-vlogs.json';
    fetchData(jsonFile, prefix);
  }
  else if (buttonId.startsWith("html-css-js")) {
    prefix = "html-css-js";
    jsonFile = 'Html-CSS-JS-Projects-vlogs.json';
    fetchData(jsonFile, prefix);
  }
  else if (buttonId.startsWith("c-plus-plus-language")) {
    prefix = "c-plus-plus-language";
    jsonFile = 'C-Plus-Plus-Projects-vlogs.json';
    fetchData(jsonFile, prefix);
  }
  else if (buttonId.startsWith("java-language")) {
    prefix = "java-language";
    jsonFile = 'Java-Projects-vlogs.json';
    fetchData(jsonFile, prefix);
  }
  else if (buttonId.startsWith("python-language")) {
    prefix = "python-language";
    jsonFile = 'Python-Projects-vlogs.json';
    fetchData(jsonFile, prefix);
  } else {
    console.error('Invalid Post.');
  }

}


async function fetchData(jsonFile, prefix) {
  const buttonId = JSON.parse(localStorage.getItem('buttonId')).buttonId;
  const response = await fetch('database/postDetails/' + jsonFile);
  const data = await response.json();

  const numericId = buttonId.slice(prefix.length);
  let matchingPost = null;
  for (const post of data.posts) {
    if (post.id === parseInt(numericId)) {
      matchingPost = post;
      creatingPostPage(matchingPost);
      break;
    }
  }


}



function creatingPostPage(post) {

  const targetElement = document.querySelector('.projects-detailed-sub-main');

  let htmlCode = '';

  htmlCode += `
            <div class="project-heading">
                <h2>${post.heading}</h2>
            </div>
            <hr>
            <div class="project-about">
                <div class="project-about-left">
                    <div class="project-about-left-heading">
                        <h3>About This Code : </h3>
                    </div>
                    <div class="project-about-left-description">
                        ${post.aboutdescription}
                    </div>
                </div>
                <div class="project-about-right">
                    <img src="images/postDetailsImages/${post.aboutimage}" alt="">
                </div>
            </div>
            <div class="project-breakdown">
                <div class="project-breakdown-right">
                    <img src="images/postDetailsImages/${post.breakdownimage}" alt="">
                </div>
                <div class="project-breakdown-left">
                    <div class="project-breakdown-left-heading">
                        <h3>Breakdown The Code : </h3>
                    </div>
                    <div class="project-breakdown-left-description">
                        ${post.breakdowndescription}
                    </div>
                </div>
                
                </div>
                <div class="project-download-area">
                    <div class="project-download-area-heading">
                        <h3>Download Or Copy The Code : </h3>
                    </div>
                    <div class="project-download-area-buttons-section">
                        <a href="" download=""><button class="project-download-area-button">Download Me!</button></a>
                        <a href=""><button class="project-download-area-button">Click To Copy</button></a>
                    </div>
                </div>`;
  targetElement.innerHTML = htmlCode;
}











