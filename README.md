# Parallaxy.js

Simple Parallax Scrolling.

[Demo here](https://hexbridge.github.io/parallaxy/)

### Basic Usage

1. Include jQuery.js
  ```
  <script src="/path-to-script/jquery.min.js"></script>
  ```

2. Include parallaxy.js
  ```
  <script src="/path-to-script/parallaxy.js"></script>
  ```

3. Add the CSS
  ```
  .background {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
  }

  .content {
    position: relative;
    z-index: 2;
  }
  ```
4. Add data-speed attribute
  ```
  data-speed="1.0"
  ```
5. Add the classes `.background` and `.content`
  ```
  <section data-speed="0.0">

    <div class="background"></div>

    <div class="content">
      <h1>Speed = 0.0</h1>
    </div>

  </section>
  ```
