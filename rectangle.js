$(function(){
  var $length = $('#length'),
      $width = $('#width'),
      $perimeter = $('#perimeter'),
      $area = $('#area'),
      $btn = $('#btn');

  $btn.click(function(){
    let w = $width.val(),
        l = $length.val();
    let p = 2*(Number(w)+Number(l)),
        a = w*l;
    console.log(p,a);
    
    $perimeter.val(p);
    $area.val(a);
  })
})
