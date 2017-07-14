$('[magnitude]').each(function(){
  var el=this;

  $.get(el.src, function(doc){
    var svg = $(doc).find("svg").attr(inheritedAttributes());
    $(svg).attr(inheritedAttributes(el))

    console.log(inheritedAttributes(el))

    $(el).replaceWith(svg);
  }, "xml");
});

function inheritedAttributes(el){
  ob = new Object();

  //Inherited Attributes
  ob.id = $(el).attr("id");
  ob.source = $(el).attr("src");
  ob.magnitude = $(el).attr("magnitude");
  ob.width = $(el).attr("width");
  ob.height = $(el).attr("height");

  //Special Attributes for Magnitude functionality
  ob.preserveAspectRatio = "none"

  return ob
};
