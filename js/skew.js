(function() {
  // Init
  var container = document.querySelector('.container__right');
  var frame = document.querySelector('.container__right--frame');

  // Mouse
  var mouse = {
    _x: 0,
    _y: 0,
    x: 0,
    y: 0,
    updatePosition: function(event) {
      var e = event || window.event;
      this.x = e.clientX - this._x;
      this.y = (e.clientY - this._y) * -1;
    },
    setOrigin: function(e) {
      this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
      this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
    },
    show: function() {
      return '(' + this.x + ', ' + this.y + ')';
    }
  };

  // Track the mouse position relative to the center of the container__right.
  mouse.setOrigin(container);

  //-----------------------------------------

  var counter = 0;
  var updateRate = 10;
  var isTimeToUpdate = function() {
    return counter++ % updateRate === 0;
  };

  //-----------------------------------------

  var onMouseEnterHandler = function(event) {
    update(event);
  };

  var onMouseLeaveHandler = function() {
    frame.style = '';
  };

  var onMouseMoveHandler = function(event) {
    if (isTimeToUpdate()) {
      update(event);
    }
  };

  //----------------------------Frame
  var update = function(event) {
    mouse.updatePosition(event);
    updateTransformStyle(
      (mouse.y / frame.offsetHeight / 2).toFixed(2),
      (mouse.x / frame.offsetWidth / 2).toFixed(2)
    );
  };

  var updateTransformStyle = function(x, y) {
    var style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
    frame.style.transform = style;
    frame.style.webkitTransform = style;
    frame.style.mozTransform = style;
    frame.style.msTransform = style;
    frame.style.oTransform = style;
  };

  //-----------------------------------------

  container.onmouseenter = onMouseEnterHandler;
  container.onmouseleave = onMouseLeaveHandler;
  container.onmousemove = onMouseMoveHandler;
})();
