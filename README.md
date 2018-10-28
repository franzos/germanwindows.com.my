# Q-Windows Malaysia Website

This is the code-base of the Q-Windows website.

**CAUTION:** Any changes to the codebase are compiled and uploaded automatically. That means, they will go live on the website within max. 10 minutes.

## Requirements

To work on the Q-Windows website, you should fulfill the following requirements:

**Necessary**

- Expert on CSS3, HTML5
- Working knowledge of Javascript
- Experience with yarn, gulp or similar
- Markdown
- .git

**Good**

- Bootstrap 3
- Vue.js experience
- Working with Jekyll

## Development

**You can make changes directly in the browser**, using the built-in IDE, or download the code to your computer, to develop and test locally.

### 1) Download the code

    mkdir q-windows.com.my && cd q-windows.com.my
    git remote add origin https://git.sedv.org/f-a.nz/q-windows.com.my.git
    git pull origin master

### 2) Set-up your development environment

Before you get started, set-up the required tools, for development and asset compilation. Alternatively, a complete development environment is contained in Docker image `franzos/ruby-node-gulp-java`, which can be obtained trough the Docker Repository.

    bundle install
    yarn install

### 3) Development server and live asset compilation

Run the following two, in separate command line shells.

    gulp watch
    JEKYLL_ENV=development bundle exec jekyll serve -d public/