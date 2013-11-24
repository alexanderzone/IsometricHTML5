$(function() {
  window.keydown = {};
  
  function keyName(event) {
    return jQuery.hotkeys.specialKeys[event.which] ||
      String.fromCharCode(event.which).toLowerCase();
  }
  
  $(document).bind("keydown", function(event) {
    var key = keyName(event);
    if (key == "left"  ||
        key == "up"    ||
        key == "right" ||
        key == "down"  ||
        key == "space")  {
      event.preventDefault();
    }
    keydown[key] = true;
  });
  
  $(document).bind("keyup", function(event) {
    keydown[keyName(event)] = false;
  });
});
